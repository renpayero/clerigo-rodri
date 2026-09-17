import sys,re,html,urllib.request,os
def get(url,name):
    p=f'_audit/{name}.html'
    if not os.path.exists(p):
        req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
        d=urllib.request.urlopen(req,timeout=60).read()
        open(p,'wb').write(d)
    s=open(p,encoding='utf-8',errors='ignore').read()
    m=re.search(r'id="main"',s)
    s=s[m.start():] if m else s
    s=re.sub(r'<script.*?</script>','',s,flags=re.S)
    s=re.sub(r'<(br|/h[1-6]|/p|/div|/tr|/li)[^>]*>','\n',s)
    t=html.unescape(re.sub('<[^>]+>','',s))
    t=re.sub(r'[ \t]+',' ',t); t=re.sub(r'\n\s*\n+','\n',t)
    open(f'_audit/{name}.txt','w',encoding='utf-8').write(t)
    return t
if __name__=='__main__':
    t=get(sys.argv[1],sys.argv[2])
    if len(sys.argv)>3:
        for kw in sys.argv[3:]:
            for m in re.finditer(re.escape(kw),t,re.I):
                print('>>>',t[max(0,m.start()-100):m.start()+900].replace('\n',' | ')); print()
    else: print(t[:6000])

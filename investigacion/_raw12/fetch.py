import re,html,sys,subprocess,os
url=sys.argv[1]; name=sys.argv[2]; maxlen=int(sys.argv[3]) if len(sys.argv)>3 else 60000
fn=name+'.html'
if not os.path.exists(fn) or os.path.getsize(fn)<2000:
    subprocess.run(['curl','-sL','-A','Mozilla/5.0',url,'-o',fn])
s=open(fn,encoding='utf-8',errors='ignore').read()
i=s.find('partnership status update')
if i>0: s=s[i:]
t=s
t=re.sub(r'<script.*?</script>','',t,flags=re.S)
t=re.sub(r'<style.*?</style>','',t,flags=re.S)
t=re.sub(r'<br\s*/?>','\n',t)
t=re.sub(r'</(tr|h1|h2|h3|p|div|li)>','\n',t)
t=re.sub(r'<h[123][^>]*>','\n## ',t)
t=re.sub(r'</td>',' | ',t)
t=re.sub(r'<b>',' **',t); t=re.sub(r'</b>','** ',t)
t=re.sub(r'<[^>]+>','',t)
t=html.unescape(t)
t=re.sub(r'[ \t]+',' ',t)
t=re.sub(r'\n\s*\n+','\n',t)
t=t.replace('Site Owner: Blake DavisEmail Spam Checker: MX Guarddog','')
open(name+'.txt','w',encoding='utf-8').write(t)
import io; sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding="utf-8",errors="replace"); print(len(t)); print(t[:maxlen])

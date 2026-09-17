#!/bin/sh
# usage: get.sh name url
curl -s -L -A "Mozilla/5.0" "$2" -o "$1.html"
sed 's/<br \/>/\n/g; s/<\/tr>/\n/g; s/<[^>]*>//g' "$1.html" | grep -v "^\s*$" | sed -n '/^ *Home *$/,$p' | grep -v "^\s*$" | awk 'f||/Source/{f=1} f' > "$1.txt"
echo "$1: $(wc -c < $1.txt) bytes"

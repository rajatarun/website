import urllib2
import json
#http = urllib3.PoolManager();
#response = http.request('GET','http://api.nytimes.com/svc/news/v3/content/all/arts/24.json?limit=10&api-key=4892fcafeed4f452878fc912fbc0546d:7:72071069');   
f = open("tarun.txt","w");
#b = io.BufferedReader(r, 2048);
#f.write(response);
#print response.stream();
#import requests
#r = requests.get('http://api.nytimes.com/svc/news/v3/content/all/arts/24.json?limit=10&api-key=4892fcafeed4f452878fc912fbc0546d:7:72071069')
#for i in r.headers:
#	print r.headers[i];
#print r.read();
url = "http://api.nytimes.com/svc/news/v3/content/all/arts/24.json?limit=10&api-key=4892fcafeed4f452878fc912fbc0546d:7:72071069";
result = urllib2.urlopen(url);
data = result.read();
f.write(data);
f.close();
f = open("bussiness.txt","w");
url = "http://api.nytimes.com/svc/news/v3/content/nyt/business/72.json?api-key=4892fcafeed4f452878fc912fbc0546d:7:72071069";
result = urllib2.urlopen(url);
data = result.read();
f.write(data);
f.close();
f = open("sports.txt","w");
url = "http://api.nytimes.com/svc/news/v3/content/all/sports/24.json?limit=10&api-key=4892fcafeed4f452878fc912fbc0546d:7:72071069";
result = urllib2.urlopen(url);
data = result.read();
f.write(data);
f.close();
f = open("world.txt","w");
url = "http://api.nytimes.com/svc/news/v3/content/all/world/24.json?limit=10&api-key=4892fcafeed4f452878fc912fbc0546d:7:72071069";
result = urllib2.urlopen(url);
data = result.read();
f.write(data);
f.close();
f = open("us.txt","w");
url = "http://api.nytimes.com/svc/news/v3/content/all/U.S./24.json?limit=10&api-key=4892fcafeed4f452878fc912fbc0546d:7:72071069";
result = urllib2.urlopen(url);
data = result.read();
f.write(data);
f.close();


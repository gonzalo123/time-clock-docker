from time import gmtime, strftime, sleep
import httplib2

h = httplib2.Http()
while True:
    (resp, content) = h.request("http://node:6400/tic?time=" + strftime("%H:%M:%S", gmtime()))
    sleep(1)
### How to reproduce issue
```sh
yarn
yarn dev
# Go to localhost:3000
# See _pageHtml is empty when printed in the terminal.
# Inspect browser network requests to see that a request is made to https://countries.trevorblades.com from the client, even though it should be reading from the cache that was set by the server and passed to the client.
```

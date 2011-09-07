Ryddig kode og trivelig testing ved å wrappe ajax-kallene dine
==============================================================
Her er koden og slides for min JavaZone-lyntale.

Hva gjør jeg for å bruke serverFacade?
--------------------------------------

Start med å dra inn `ajax-wrapper.js` og `server-facade.js` i prosjektet.

* Definer din default `timeout` og `contentType` i `serverFacade`.
* Finn samtidig på noe annet enn `alert` når ting går galt.
* Lag deretter spesialiserte serverFacades a-la `memberFacade` og bruk dem istedet for `$.post`.

Du kan bygge ut `ajaxWrapper` og `serverFacade` med `getJSON`, `get` og `post` om du
skulle ha brukt for dem.

Hvorfor er ikke denne koden klin lik slidesene?
-----------------------------------------------

Ti minutter er søren ikke mye tid. 

ServerFacade slik jeg beskriver den i lyntalen har litt for mye å gjøre. Ikke bare
wrapper den ajax-kallet og oversetter til et sett med feiltyper, men den definerer også
default timeout, contentType og globale feilhåndteringsfunksjoner.

Derfor har jeg delt den opp i en `ajaxWrapper` som tar seg av wrapping og oversetting,
mens `serverFacade` tar seg av globale settings.

Det ble før klønete å forklare i en fei, så det.


Hvordan kan jeg kjøre testene?
------------------------------

For å kjøre testene trenger du [buster.js](http://busterjs.org) installert. Versjonen
som ligger i npm er ikke helt stabil om dagen, men det løser seg forhåpentligvis fort. Da
skal det holde å skrive

    npm install -g buster
    
Gitt at du har [npm](http://npmjs.org) og [node](http://nodejs.org) installert.

Da kjører du de enklest etterpå med
  
    buster static
    
og besøker URL'en som dukker opp. Evnt så kan du starte en buster-server med

    buster server
    
og registrere en browser på den URLen, og deretter kjøre

    buster test

Lisens
------

Standard MIT-lisens. Bare å bruke.

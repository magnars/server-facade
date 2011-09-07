Ryddig kode og trivelig testing ved å wrappe ajax-kallene dine
==============================================================
Her er koden og slides for min JavaZone-lyntale.

Hva gjør jeg for å bruke serverFacade?
--------------------------------------

Start med å dra inn `ajax-wrapper.js` og `server-facade.js` i prosjektet.

* Definer din default timeout og contentType i serverFacade.
* Finn samtidig på noe annet enn `alert` når ting går galt.
* Lag deretter spesialiserte serverFacades a-la memberFacade og bruk dem istedet for $.post.

Du kan bygge ut `ajaxWrapper` og `serverFacade` med `getJSON`, `get` og `post` om du
skulle ha brukt for dem.

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

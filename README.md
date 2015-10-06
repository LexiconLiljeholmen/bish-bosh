# Övning 8: Webb - Front-end och JavaScript

##### Övning och tillämpning av klientfunktionalitet

För att befästa era nya scriptkunskaper skall en ni skriva ett litet script som heter
‘Bish-Bosh’, inte helt olikt en av uppgifterna i kursens ‘intagningsprov’. Uppgiften skall
skrivas med egen kod - utan inspiration från google. Det är tillåtet att använda sig av
internetsök för språkspecifika detaljer, men inte kopiera kod eller titta på färdiga
lösningar. Ni skall tydligt kunna förklara rad för rad vad koden gör.
Redovisning vid datorn - ingen e-mail inlämning.

### Bish-Bosh
Bish-Bosh listar alla tal mellan 1 och 100, men vissa undantag: Om talet är jämnt delbart
med 3 listas ‘Bish’ istället för talet. Om talet är jämnt delbart med 4 listas ‘ Bosh ’ istället
för talet. Om talet är jämtdelbart med både med 3 och 4 skrivs “ Bish-Bosh ” istället för
talet.

Exempel:
1, 2, Bish , Bosh , 5, Bish , 7, Bosh , Bish , 10, 11, Bish-Bosh , 13, 14, Bish [...]

##### En första implementation
Denna implementation ställer inga krav på övrig front-end utan enbart att javascriptet
fungerar och applikationen gör som den ska - alltså exekverar enligt ovan exempel. För
att testa om något är jämnt delbart så kollar man om resten är noll vid division (tips:
modulus-operatorn %). Allt skall alltså ske i javascript, det enklaste sättet att göra
utskriften är i webbläsarens konsoll.

##### En andra implementation: Bish-Bosh 2.0
Nu skall ni skriva om Bish-Bosh med ett visuellt gränssnitt och presentation på en
HTML-sida. Ni skall även låta en användare sätta scriptets parametrar, alltså:
Vilken siffra som är Bish (tidigare 3), vilken siffra som är Bosh (tidigare 4) och hur långt
loopen skall gå (tidigare 100):

* Det skall användas variabler för:
  * Loop tal (alltså vart loopen ska sluta)
  * Första divisionstall (det som ska ersättas med Bish)
  * Andra divisionstal (det som ska ersättas med Bosh)
* Ett webbaserat UI som innehåller:
  * Inputfält för ovanstående variabler
  * En header (Bish-Bosh 2.0)
  * En footer med ert namn och copyright
  * En text som förklarar ‘Bish-Bosh’ och i vilket syfte ni skapat sidan.
  * En presentation av talen
* Separata filer:
  * index.html
  * style.css
  * bishbosh.js

Undvik gärna CodePen.io eller liknande lösningar för att öva på att själva koppla ihop
filerna.

Lycka till!

---
layout: post
title: Det blir ikke menneskelig KI bare ved å gjette neste ord
date: 2025-03-26 14:24:00
description: CEOene i de amerikanske teknologifirmaene sier vi bare trenger større datahaller for at KI skal kunne klare alt, det er nok neppe riktig, men hva skal egentlig til?
thumbnail: assets/img/blog/more_data_more_compute.png
tags: KI AGI
categories: rant
---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
Nesten hver uke hører vi fantastiske nyheter om kunstig intelligens (KI). Den vinner gull i matte-OL, skriver masteroppgaver på rekordtid, og programmerer bedre enn mange profesjonelle utviklere. Likevel skjønner de fleste som bruker disse verktøyene at KI fortsatt snubler i mange oppgaver som vi synes er enkle og nyhetene gjenspeiler ikke helt virkeligheten. Tiltross for felene har det blitt  vanskeligere å peke konkret på hva mennesker kan, som KI ikke klarer – bortsett fra det å operere i den virkelige verden. Hva er det som mangler før vi får KI på menneskelig nivå og vil det la seg gjøre?
  </div>

  <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="assets/img/blog/more_data_more_compute.png" title="More data, more compute!" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
    KI CEOer er besatt av regnekraft og investorpenger. (Kilde: KI-generert bilde chatgpt 4o)
    </div>
  </div>
</div>

## **Hva KI allerede mestrer – og hvor den svikter**

Dagens store språkmodeller, som ChatGPT, Gemini og Claude, er svært flinke til én ting: å gjette hva neste ord i en tekst skal være. Det høres trivielt ut, men med nok data og avansert maskinvare har dette resultert i imponerende egenskaper. Modellene kan løse logiske oppgaver, generere historier eller dikt og finne informasjon lynraskt.

Ilya Sutskever, en av grunnleggerne av firmaet OpenAI som står bak ChatGPT, har en fin forklaring på hvorfor dette skal kunne skape intelligens. Hvis en KI skal lese en krim bok og gjette neste ord i “derfor er morderen…”, må modellen forstå det meste i boken. En KI som er veldig god til å gjette nest ord må derfor være en smart modell.

Likevel, bak disse imponerende prestasjonene skjuler det seg et fundamentalt problem: **Modellene forstår ikke verden; de kjenner bare sannsynligheten for ord som passer sammen.** Når oppgaver beveger seg utenfor mønstre modellene allerede har lært, oppstår ofte problemer.

Dette viser seg spesielt godt i det som kalles «hallusinasjoner», altså at modellen finner opp svar når den ikke vet bedre. Selv om nyere teknikker som forsterkningslæring og integrasjon med eksterne kilder (som internettsøk) har redusert problemet, er dette fortsatt en stor utfordring.

Selv synes jeg ikke hallusinasjoner er så stort problem, men jeg irriterer meg over at KI genererte tekster ofte virker litt kjedelig og flate. 
Ja, de kan legge inn både humor og et variert språk, men det er likevel noe som gjør at det blir litt kjedelig. Du kan jo vurdere selv, jeg spurte ChatGPT "Deep research" om å lage det jeg hadde tenkt å skrive om her. Her er promptet:


<p style="margin: 50px">
<i>
Write a blog post or essay on what is currently lacking in AI, for it to be called human level AI. Write about strong and week points and discuss whether just scaling up current solutions will get us there.
What are elements that AI cannot currently do. Who represents the different sides of the argument.

Try to write it a bit edgy and though provoking, without going overboard. Just do not make it bland and boring.
</i>

så bad jeg den:
<i>
Kan du skrive en blog post på norsk basert på dette, du kan kutte ned en god del. Prøv å gjøre den morsom og spennende. Prøv å ha litt tydelige intensjoner, rød tråd og meninger.
</i>
</p>

[Her kan du lese det den skrev!]({% post_url 2025-31-03-menneskelig_KI_av_KI %}).
Jeg må egentlig si at det ble overraskende bra, jeg prøvde å bruke det beste tilgjengelige, først "Deep research" for å finne bakgrunn også ChatGPT 4.5 for å skrive teksten.
Jeg mener at den tar litt feil på enkelte områder, spesielt med tanke på logikk og sunn fornuft.
Jeg vet ikke hvor viktig det er at KI fakisk må vite hva "å falle" betyr, for at den skal være nyttig og jeg vet ikke om Sosial IQ faktisk handler om å føle noe, men å forstå hvordan andres følelser påvirker hvordan en burde interagere.
Den største kritikken er kanskje at den "hoster opp" argumenter fra andre, e.g. Gary Marcus, uten å komme med noen ny vinkling.
Dette gjelder jo kanskje mest hvis man allerede er dypt inne i litteraturen og allerede kan de kjente argumentene.

## **Slapp av, det er bare å skalere opp\!**

Sam Altman, CEO i OpenAI, og mange av hans kolleger har et enkelt svar på hvordan vi skal få KI på nivå med mennesker: **Vi trenger bare å gjøre modellene større og kraftigere.** Dette perspektivet gir et klart veikart: mer data, flere parametere, mer beregningskraft \= smartere modeller. Denne «skaleringshypotesen» er enkel å forstå og, viktigst av alt, attraktiv for investorer fordi den antyder en lineær og forutsigbar utvikling. Men virkeligheten er sjelden så enkel.

I mine øyne er denne hypotesen allerede erklært fallit. Større modeller har blitt laget, og forbedringene har kun vært marginale. Ved hjelp av store endringer i modell arkitektur, trening og bruk derimot har man sett store forbedringer. Historisk har utviklingen vært preget av uforutsigbare gjennombrudd, ikke jevne fremskritt. KI har hatt store hopp i evner med små tekniske endringer – ikke bare ved å bli større. Modellene blir ikke lenger trent bare til å forutsi neste ord, og nå er det nærmest umulig å tenke seg at man kunne fått like bra ytelse kun ved det.

For eksempel var det overraskende at språkmodeller plutselig kunne resonnere bedre med enkle teknikker som å be den “tenke steg for steg”, uten store endringer i modellens arkitektur. Dette var ikke noe som kunne vært forutsagt bare ved å skalere opp. Spørsmålet blir da, er det store eller små endringer som skal til?

## **KI kan mer enn å memorere**

En viktig endring den siste tiden har vært såkalte resonneringsmodeller, som kan gi mye bedre svar på vanskelige oppgaver. Etter den normale treningen med å forutsi neste ord, så blir modellene trent på konkrete oppgaver med entydige svar. Modellen kan da skrive så mye tekst den vil innenfor \<tenke\> symbolene, men så må den gi eksakt riktig svar. Dette har gitt modelle muligheten til å prøve seg frem med løsninger uten å bli “straffet” underveis for å tenke feil.

En vanlig kritik mot KI modeller er at de kun memorerer svar fra det store internett. Dette er tilbakevist flere ganger og spesielt med disse nye resonneringsmodeller. [ARC-AGI](https://arcprize.org/) testen er laget for å teste evnen til å løse helt nye oppgaver og fungerer omtrent som en IQ-test. Disse ble laget spesielt med memorisering i tankene, og oppgavene holdes skjult helt til modellene blir testet. Ved å bruke resonneringsmodellene har man gått fra å klare 4.5% av disse oppgavene i fjor sommer, til 75% i dag. Så det er nå klart at KI kan mer enn bare å memorisere og kan faktisk løse avanserte oppgaver.

## **Manglende forståelse av den virkelige verden – et konkret eksempel**

Yann LeCun, sjefsforsker hos Meta og en av pionerene innen dyp læring, har ofte påpekt at KI fortsatt mangler en grunnleggende forståelse av fysisk virkelighet. Modeller trent på ren tekst eller bilder fra nettet lærer ikke om hverdagens små detaljer som mennesker automatisk forstår, fordi slike ting sjelden beskrives eksplisitt.

Her er et konkret eksempel jeg selv laget og prøvde på flere KI-modeller:

«Jeg har en blokkfløyte i flosshatten min, som jeg har på hodet. Jeg bukker dypt, tar av hatten slik at fløyta faller ned i hatten, og henger deretter hatten over en stolpe, imens jeg tar en pust i bakken. Til slutt tar jeg hatten på igjen, går hjem og legger hatten i skapet. Hvor tror du fløyta er nå?»

Denne rare historien eksisterer nok ikke på nettet før nå og er full av underforståtte detaljer, som at en flosshatt er stiv og at åpningen sannsynligvis peker ned når hatten henger på en stolpe. Resultatet var at ingen av modellene forstod når fløyta kunne ha falt ut, selv om jeg også spurte direkte om det. Riktignok når jeg formulerte det på engelsk, forsto den kinesiske modellen Deepseek-R1 løsningen, men de andre modellene skjønte det fortsatt ikke.

Dette illustrerer hvor svak forståelsen av den fysiske verden er i dagens KI. 

## **Langsiktig planlegging og autonomi – fortsatt uferdig**

En annen tydelig mangel er evnen til langsiktig planlegging og autonomi. Dagens KI-systemer har ikke evne til å planlegge på lang sikt, med mindre de har en forhåndsdefinert struktur, slik som de såkalte KI agentene bruker. Når en slik KI agent operer over tid, blir den brukt stegvis, og manuell programmering som bestemmer hva agenten skal gjøre og vet om i hvert steg.

Selv om selskaper som Sakana AI nylig hevdet å ha laget en slik autonom KI-agent som kunne publisere fagfellevurderte artikler alene, hvor KI stod bak både idé, eksperiment gjennomføring og artikkel skriving. Selv om dette er imponerenede så har undersøkelser vist at slike modeller fortsatt sliter med å rapportere nøyaktige resultater og at idéene ofte ikke er så orginale som KIen trodde.

Menneskelig intelligens innebærer å sette egne mål, planlegge langsiktig, og endre strategier ved behov – noe KI ennå ikke mestrer uten en ferdig laget struktur som styrer den.

## **Evnen til kontinuerlig læring – den store flaskehalsen**

En annen grunnleggende forskjell mellom KI og mennesker er måten vi lærer på. Dagens KI-modeller blir trent én gang på enorme datasett, og etter det er de «låst». De kan ikke enkelt lære ny informasjon uten å risikere å ødelegge gammel kunnskap, et fenomen kalt «katastrofal glemming».

Det er pågående forskning på dette problemet, både gjennom eksterne minnemoduler og mer robuste treningsmetoder. Men fremgangen har vært treg, og dette representerer kanskje det største hinderet for å oppnå en intelligens som kan konkurrere med menneskers evne til læring.

## **Det er umulig å forutsi når (eller om) KI når menneskelig nivå**

Det som kjennetegner KI-utviklingen frem til nå, er nettopp dens uforutsigbarhet. Det blir nok ingen jevn fremgang bare ved å skalere modellene, slik Sam Altman og andre tech-ledere gjerne fremstiller det. Det må også sies at fremgange i over 10 år har overgått mine og mange andres forventninger, og det kastes mere penger på det nå enn noen gang før.

I virkeligheten er det svært sannsynlig at vi må ha flere store, uventede gjennombrudd før KI virkelig kan sammenlignes med menneskelig intelligens. Dette kan innebære radikale endringer i hvordan vi designer og trener modeller – endringer vi enda ikke vet hva innebærer.

Så neste gang du hører en CEO som lover at «AGI er rett rundt hjørnet – vi må bare skalere litt mer\!», husk at det er en enklere fortelling enn den uforutsigbare virkeligheten vi faktisk lever i.

I mellomtiden kan du i alle fall nyte at den beste løsningen på hverdagsproblemer antagelig finnes mellom ørene dine – og ikke bare i skyen.


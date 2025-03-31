---
layout: post
title: Ockhams barberkniv er en bærebjelke for store språkmodeller
date: 2025-03-26 14:24:00
description: I vitenskapen har det lenge vært en grunnregel at de enkleste forklaringene er de beste. 
thumbnail: assets/img/blog/ockham_kutter.png
tags: transformere KI
categories: teori
---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
  I vitenskapen har det lenge vært en grunnregel at de enkleste forklaringene er de beste. Når en teori kan forklare noe med færrest mulig antakelser, regnes den som mer elegant – ja, noen ganger til og med vakker. Dette prinsippet kalles Ockhams barberkniv: alt som er unødvendig bør skjæres vekk.

  Selv Rema 1000 har fanget opp ideen med slagordet “Det enkle er ofte det beste”. Og kanskje er det ikke så overraskende at dette prinsippet – forenkling – også ligger til grunn for hvordan moderne kunstig intelligens fungerer?
  </div>

  <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="assets/img/blog/ockham_kutter.png" title="example image" class="img-fluid rounded z-depth-1" %}
    <div class="caption">
      Ockham er ute og forenkler med barberkniven sin (AI-generert chatgpt 4o)
    </div>
  </div>
</div>

## Hva er egentlig en transformer?

Transformere er en type maskinlæringsmodeller som ligger bak de store språkmodellene – som ChatGPT, Gemini og Claude. Disse modellene er laget for å forstå sammenhengen mellom ord, og forutsi hva som kommer videre i en tekst.

Det som gjør transformere unike, er det vi kaller **oppmerksomhetsmekanismer**. Disse lar modellen vurdere hvilke ord i en tekst som er viktige i sammenhengen. I stedet for å behandle alle ord likt, fokuserer modellen på utvalgte deler av teksten, og gir disse mer “vekt”.
s du bytter ut et uvesentlig ord i en setning, vil svaret som oftest være det samme – fordi mod
Dette skjer blant annet gjennom matematiske funksjoner som **softmax** og **ReLU**, som bidrar til å forsterke signalene fra enkelte ord og dempe andre. På den måten lærer modellen å hente ut det vesentlige – og overse støy.

## Hvorfor velger modellen det enkle?

Språkmodeller har det som kalles en **forenklingstendens** (simplicity bias). Det betyr at de har en naturlig tilbøyelighet til å velge de enkleste løsningene først – altså sammenhenger mellom få og nærliggende ord.

Dette gjør dem mer robuste. Hvis du bytter ut et uvesentlig ord i en setning, vil svaret som oftest være det samme – fordi modellen har lært å fokusere på det som faktisk betyr noe.

Under trening begynner modeller ofte med å lære grunnleggende mønstre, som hvordan subjekt og verb henger sammen, eller hvordan kjønn og entall/flertall uttrykkes i språket. Først etter at denne basiskunnskapen er på plass, beveger modellen seg videre til mer komplekse oppgaver, som logiske resonnementer eller tekstforståelse på høyt nivå.

## Fra enkle mønstre til kompleks forståelse

Selv om modellene starter med det enkle, er de ikke begrenset til det. Transformere er i stand til å finne svært kompliserte mønstre – spesielt når de får nok dybde og kontekst.

**Kontekstlengde** handler om hvor mye tekst modellen kan ta inn samtidig. Store modeller som Gemini 2.5 kan analysere opptil 700 000 ord på én gang. Det gir enorm kapasitet – men også et behov for å velge ut den informasjonen som faktisk er relevant.

**Dybden** i en modell viser hvor mange lag med analyse den gjør før den gir et svar. Hvert lag kan kombinere informasjon på nye måter. DeepSeek V3, for eksempel, har 61 slike lag. Når hvert ord i en tekst kan kobles til alle andre ord, og dette skjer i lag etter lag, blir det mulig å oppdage svært komplekse sammenhenger – selv om modellen begynner med det enkle.

## Ockhams barberkniv i praksis

Ockhams barberkniv handler om mer enn filosofi – den viser seg å være en nøkkel til hvorfor språkmodeller faktisk fungerer. Forskere som Rende og Bhattamishra peker på nettopp denne evnen til å finne enkle forklaringer som en viktig grunn til modellenes suksess.

Transformer-modeller viser seg nyttige på mange områder hvor man skal modellere svært kompliserte sammenhenger, som å gjette “utseende” til et protein basert på RNA-sekvenser (AlphaFold), eller fysikksimuleringer.

Det som kjennetegner disse problemene, hvor transformerne gjør det veldig bra, er data der det er ufattelig mange mulige sammenhenger, men hvor de faktiske sammenhengene er enklere. Disse problemene er det mange av. Kanskje du kjenner til et mulig neste problem?

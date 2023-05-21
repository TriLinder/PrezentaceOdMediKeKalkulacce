<script>
    import H2Slide from "../general/H2Slide.svelte";
    import HowDoYouCount from "./HowDoYouCount.svelte";
    import CounterSlide from "../general/CounterSlide.svelte";
    import CountingAddition from "./CountingAddition.svelte";
</script>

<H2Slide content={"KALKULAČKA?"} notes={`Je čas si dát na chvilku přestávku od nekonečného skládání součástek a
                                            znovu se podívat na náš cíl: a to postavit kalkulačku. Jak spoustě z vás
                                            už asi dávno došlo, tak jedničky a nuly, co jsme doposud používaly v předchozích
                                            tabulkách byly ve dvojkové neboli binární soustavě. Tyto dva termíny
                                            budu nadále používat zaměnitelně. Taky spousta z vás asi ví, že počítače
                                            pracují v této binární soustavě neboli s jedničkami a nulami.
                                            Tak bude tedy pracovat i naše kalkulačka.`}/>

<HowDoYouCount/>

<CounterSlide numeralSystemBase={10} numberOfDigits={4} countInterval={1000} shouldPlaySound={true} notes={`My lidé většinou počítáme v desítkové
                                                                                                            soustavě. To znamená, že používáme deset číslic
                                                                                                            od nuly do devítky. Jakmile nám v jedné cifře dojdou 
                                                                                                            číslice, přičteme 1 k další. Každá cifra má desetinásobnou
                                                                                                            "hodnotu" té předchozí. Takže tato cifra má hodnotu 1,
                                                                                                            tato 10, tato 1000 a tato 10000.`}/>

<CounterSlide numeralSystemBase={2} numberOfDigits={4} countInterval={1000} shouldPlaySound={true} notes={
    `Naprosto stejně se chovají číslice i ve dvojkové soustavě.
    Jenom místo desíti číslic pro jednu cifru máme jenom dvě.`}/>

<H2Slide content={"SČÍTÁNÍ"} notes={`
    Podjmě si tedy ukázat jak sečíst dvě čísla.`}/>

<CountingAddition/>
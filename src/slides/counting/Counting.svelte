<script>
    import H2Slide from "../general/H2Slide.svelte";
    import HowDoYouCount from "./HowDoYouCount.svelte";
    import CounterSlide from "../general/CounterSlide.svelte";
</script>

<H2Slide content={"KALKULAČKA?"} notes={`Je čas si dát na chvilku přestávku od nekonečného skládání součástek a
                                            znovu se podívat na náš cíl: a to postavit kalkulačku. Jak spoustě z vás
                                            už asi dávno došlo, tak jedničky a nuly, co jsme doposud používaly v předchozích
                                            tabulkách byly ve dvojkové neboli binární soustavě. Tyto dva termíny
                                            budu nadále používat zaměnitelně. Taky spousta z vás asi ví, že počítače
                                            pracují v této binární soustavě neboli s jedničkami a nulami.
                                            Tak bude tedy pracovat i naše kalkulačka.`}/>

<HowDoYouCount/>

<CounterSlide numeralSystemBase={10} numberOfDigits={4} shouldPlaySound={true} notes={``}/>
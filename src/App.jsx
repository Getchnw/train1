
function App() {
  

  return (
    /*Header*/
    <div className="overflow-y-auto h-lvh bg-black px-[60px]">
      <div className="flex justify-between items-center w-[1320px] h-[178px] m-auto ">
          {/*Navbar*/}
          <div className="flex flex-row w-[800px] items-center justify-between">
              <div>
                <a href="#" className="text-[38px] text-white">Caroselling</a> 
              </div>
              <div className="flex space-x-[50px]">
                <a href="#" className="text-[19px] text-white underline underline-offset-8 ">brand design</a>
                <a href="#" className="text-[19px] text-white underline underline-offset-8 ">Web Design</a>
                <a href="#" className="text-[19px] text-white underline underline-offset-8 ">Copywriting</a>
              </div>
          </div>
          <div className="text-[19px] text-white underline underline-offset-8">
              menu
          </div>
          {/*Navbar End*/}
      </div>
      {/*คำนำ */}
      <div className="flex flex-col w-[1320px] m-auto">
          <div className="flex flex-row h-[260px] justify-between">
                <div className="text-white text-[111.5px] leading-none">
                  Caroselling<br />
                  <div className="ml-8">
                    digital studio for
                  </div>
                </div>
                <div className="flex flex-col text-white space-y-[16px] justify-end leading-[24px]">
                    <div className="w-[340.75px] text-[20.5px]">
                      Usiamo il design per mettere al centro le persone e le loro scelte.
                    </div>
                    <div className="w-[328.72px] text-[20.5px]">
                    Realizziamo siti web, brand identity e contenuti creativi che prendono per mano i tuoi clienti
                    e li portano verso di te.
                    </div>
                </div>
          </div>
          <div className="flex flex-col">
              <div className="text-white text-[119.5px] ">
                  <p className="inline-block bg-[#0045FF] ]">human</p>
                  <p className="inline">experiences</p>
              </div>
              <div className="flex space-x-32">
                <div className="divide-x divide-white">
                    <div></div>
                    <div className="flex text-white text-[18px] h-[144px] items-end">
                      <p>pscorri e scopri di più</p>
                    </div>
                </div>
                  
                <div className="flex items-end">
                  <img className="w-[32px] h-[32px]" src="src\img\Vector.png" alt="ลำโพง" />
                </div>
              </div>
          </div>
      </div>
      {/*คำนำ end*/}

      {/* page1*/}
      <div className="flex flex-row w-[1320px] m-auto mt-[240px] space-x-[127px] ">
        <div className="flex flex-row space-x-1">
          <div className="mt-4">
              <p className="inline text-[#0045FF] ">(noi) (noi) </p>
              <p className="inline text-[#FFFFFF]">(noi)</p>
          </div>
          <div className="flex flex-col w-[625px] space-y-[70.25px] text-white ">
              <div className="text-[42px] leading-tight">
              le grandi cose, come le piccole,
              tutto ci appassiona.
              </div>
              
              <div className="flex flex-col space-y-[14px] text-[20.5px] leading-tight">
                <div>
                  <p className="w-[353px]">ogni giorno nutriamo l’ambizione di</p>
                  <p className="inline bg-[#0045FF]">semplificare la complessità.</p>
                </div>
                <div className="w-[408px]">
                non amiamo i compromessi, le risposte standard per qualsiasi problema, ma solo
                la soluzione studiata e giusta per te.
                </div>
                <div className="w-[348px]">
                crediamo nelle idee che sappiano abbracciare una visione strategica.
                </div>
                <div className="w-[310px]">
                  <p className="inline">ti diremo che faremo delle cose,e poi le faremo </p>
                  <p className="inline bg-[#0045FF]">davvero.</p>
                </div>
              </div>
          </div>
        </div>
        <div className="mt-6">
            <img src="src\img\span.png" alt="line" />
        </div>
      </div>
      {/* page1 end*/}

      {/* page2*/}
      <div className="flex flex-col space-y-[150px]">
        <div className="divide-y w-[1320px] m-auto mt-[240px]">
          <div></div>
          <div className="">
            <div className="flex flex-row mt-[30px] justify-between">
              <div className="text-[#0045FF] text-[31px]">
                servizi
              </div>
              <div className="flex flex-row text-white justify-between">
                  <div className="flex flex-col w-[330px] space-y-[20px]">
                      <div className="text-[28px] underline underline-offset-8">
                        brand design
                      </div>
                      <div className="text-[21px] leading-relaxed"> 
                          <p>consulenza generale</p>
                          <p>brand strategy</p>
                          <p>brand & rebranding</p>
                          <p>logo design</p>
                          <p>visual identity</p>
                          <p>packaging design</p>
                          <p>corporate identity</p>
                      </div>
                  </div>

                  <div className="flex flex-col w-[330px] space-y-[20px]">
                      <div className="text-[28px] underline underline-offset-8">
                      Web Design
                      </div>
                      <div className="text-[21px] leading-relaxed"> 
                          <p>UX/UI design</p>
                          <p>art direction</p>
                          <p>siti web</p>
                          <p>development</p>
                          <p>microinteractions</p>
                          <p>ecommerce</p>
                          <p>content design</p>
                          <p>manutenzione e sicurezza</p>
                          <p>hosting e privacy consultant</p>
                          <p>video e photo shooting</p>
                          <p>audit SEO</p>
                          <p>SEO strategy & positioning</p>
                          <p>check-up per il tuo sito web</p>
                      </div>
                  </div>

                  <div className="flex flex-col w-[330px] space-y-[20px]">
                      <div className="text-[28px] underline underline-offset-8">
                      Copywriting
                      </div>
                      <div className="text-[21px] leading-relaxed"> 
                          <p>testi SEO e piani editoriali</p>
                          <p>revisioni</p>
                          <p>landing pages</p>
                          <p>brochure e company profile</p>
                          <p>creatività e slogan</p>
                          <p>testi per siti web & ecommerce</p>
                          <p>naming & payoff</p>
                          <p>microcopy</p>
                          <p>testi company profile</p>
                          <p>traduzioni</p> 
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-row w-[1320px] h-[405px] m-auto text-white ">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[1000px] text-[82.5px] leading-tight">
              <p className="inline">Qualunque tecnologia sufficientemente avanzata è indistinguibi</p>
              <p className="inline bg-[#0045FF]">dalla magia.</p>
            </div>
            <div className="flex flex-col w-[720px] bg-[url('src/img/div.jpg')] bg-cover bg-center ml-auto ">
              <div className="my-auto text-end pr-6">
                <p>Arthur C.</p>
                <p>Clarke </p>
              </div>
              
            </div>
        </div>
        
      </div>
      
      {/* page2 end*/}

      {/* page3*/}
      <div className="flex flex-col w-[1320px] m-auto mt-[240px] space-y-[100px] text-white ">
        <div className="flex flex-row ">
            <div className="flex flex-col mt-4 mr-3">
              <p className="inline text-[#0045FF]"> (come) (come)</p>
              <p className="inline">(come)</p>
            </div>
            <div className="flex flex-col w-[550px] space-y-[70px] leading-tight">
                <div className="text-[48.8px]">
                progettiamo per il futuro.
                </div>
                <div className="text-[22.5px] w-[420px] ">
                  <p className="inline">Nei momenti caotici il linguaggio e la comunicazione possono fare piccole grandi cose, tipo</p>
                  <p className="inline bg-[#0045FF]">5 messaggi</p>
                  <p className="inline">nella</p>
                  <div>
                    <p className="inline">capsula del tempo.</p>
                  </div>
                </div>
            </div>
            <div className="ml-[80px] mt-6">
              <img src="src\img\span (1).png" alt="line" />
            </div>
        </div>
        <div className="flex flex-wrap justify-start gap-y-[70px] ">
            <div className="flex flex-row w-[432.5px] gap-x-[45px] leading-tight items-center ">
                <div className="text-[106px] align-self-start ">01</div>
                <div className="text-[24px] w-[190px] ">
                  <p className="inline-block ">Progetta contenuti come se lavorassi per la</p>
                  <p className="inline-block bg-[#0045FF]">Fisher Price.</p>
                </div>
            </div>
            <div className="flex flex-row w-[432.5px] space-x-[45px] leading-tight items-center ">
                <div className="text-[106px]">02</div>
                <div className="text-[24px] w-[190px]">
                  <p className="inline">Rispetta le </p>
                  <p className="inline bg-[#0045FF]">emozioni</p>
                  <p className="inline">di chi legge e fruisce del tuo contenuto.</p>
                </div>
            </div>
            <div className="flex flex-row w-[432.5px] space-x-[45px] leading-tight items-center ">
                <div className="text-[106px]">03</div>
                <div className="text-[24px] ">
                  <p className="inline w-[190px]">Usa una </p>
                  <p className="inline bg-[#0045FF]">voce umana,</p>
                  <p className="inline-block">non un tone of voice.</p>
                </div>
            </div>
            <div className="flex flex-row w-[432.5px] space-x-[45px] leading-tight items-center ">
                <div className="text-[106px]">04</div>
                <div className="text-[24px] ">
                  <p className="inline w-[190px]">Trasmetti vicinanza,</p>
                  <p className="inline-block bg-[#0045FF]">etica e valori.</p>
                </div>
            </div>
            <div className="flex flex-row w-[432.5px] space-x-[45px] leading-tight items-center ">
                <div className="text-[106px]">05 </div>
                <div className="text-[24px] ">
                  <p className="inline w-[190px]">Guida le azioni delle persone, risolvi i loro problemi e </p>
                  <p className="inline bg-[#0045FF]">cambia in meglio </p>
                  <p className="inline"> la loro vita.</p>
                </div>
            </div>
        </div>
      </div>
      {/* page3 end*/}

      {/* page4*/}
      
      <div className="flex flex-col w-[1320px] m-auto">
          <div className="divide-y w-[1320px] m-auto mt-[240px]">
              <div></div>
              <div></div>
          </div>
          <div className="flex flex-row justify-between text-white">
            <div className="text-[31px] text-[#0045FF] mt-6">clienti</div>
            <div className="flex flex-col divide-y">
                <div className="flex flex-row w-[990px] h-[140px] items-center justify-between ">
                    <div className="text-[19px] ">APT Dolomiti Paganella</div>
                    <div className="flex flex-row w-[660px] items-center justify-between ">
                        <div className="text-[19px]">COPYWRITING</div>
                        <button><img src="src\img\+.png" alt="plus" /></button>
                    </div>
                </div>
                <div className="flex flex-row w-[990px] h-[140px] items-center justify-between ">
                    <div className="text-[19px] ">APT Dolomiti Paganella</div>
                    <div className="flex flex-row w-[660px] items-center justify-between ">
                        <div className="text-[19px]">COPYWRITING</div>
                        <button><img src="src\img\+.png" alt="plus" /></button>
                    </div>
                </div>
                <div className="flex flex-row w-[990px] h-[140px] items-center justify-between ">
                    <div className="text-[19px] ">APT Dolomiti Paganella</div>
                    <div className="flex flex-row w-[660px] items-center justify-between ">
                        <div className="text-[19px]">COPYWRITING</div>
                        <button><img src="src\img\+.png" alt="plus" /></button>
                    </div>
                </div>
                <div className="flex flex-row w-[990px] h-[140px] items-center justify-between ">
                    <div className="text-[19px] ">APT Dolomiti Paganella</div>
                    <div className="flex flex-row w-[660px] items-center justify-between ">
                        <div className="text-[19px]">COPYWRITING</div>
                        <button><img src="src\img\+.png" alt="plus" /></button>
                    </div>
                </div>
                <div className="pt-[75px]">
                  <button className="w-[450px] h-[106.5px] py-[22px] px-[200px] border rounded-full"><img src="src\img\+.png" alt="" /></button>
                </div>
            </div>
          </div>

      </div>
      {/* page4 end*/}

      {/* page5*/}
      <div className="flex flex-col w-[1320px] m-auto mt-[240px] space-y-[150px] text-white">
        <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-6">
                <div className="text-[25px] mt-3">
                  <p className="text-[#0045FF]">(human) (human)</p>
                  <p>(human)</p>
                </div>
                <div className="flex flex-col w-[675px] space-y-[70px] leading-tight">
                    <div className="text-[45px]">
                      <p className="inline">abbiamo bisogno di </p>
                      <p className="inline bg-[#0045FF]">parole che dicono cose.</p>
                      <p className="inline">e poi di cose che si trasformano in realtà.</p>
                    </div>
                    <div className="flex flex-col w-[433px] space-y-[16px]">
                      <p className="text-[21.5px]">il designer non deve mai dimenticare che i modelli mentali delle persone cambiano: restituire un contenuto alla portata di tutti vuol dire comprendere intimamente le motivazioni dei processi mentali dietro uno stato d’animo e le modalità di fruizione delle informazioni.</p>
                      <p className="text-[20.5px]">ed è un processo costante.</p>
                    </div>
                </div>
            </div>
            <div className="mt-6"><img src="src\img\span (2).png" alt="line" /></div>
        </div>
        <div className="relative flex flex-row w-[1320px] h-[405px] m-auto text-white ">
            
            <div className="flex flex-col w-[720px] bg-[url('src/img/div1.jpg')] bg-cover bg-center mr-auto ">
              <div className="my-auto text-start pl-6">
                <p>Arthur C.</p>
                <p>Clarke </p>
              </div>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[1000px] text-[82.5px] leading-[90px]">
              <p className="inline text-[81.5px]">L’unico modo per scoprire i limiti del possibile è</p>
              <p className="inline bg-[#0045FF]"> avventurarsiun po’ oltre</p>
              <p className="inline">, verso l’impossibile.</p>
            </div>
            
        </div>
      </div>
      {/* page5 end*/}

      {/* page6*/}
      <div className="flex flex-row w-[1320px] mt-[240px] m-auto justify-between text-white">
            <div className="flex flex-row space-x-6">
                <div className="w-[112.5px] text-[13px] mt-3">
                  <p className="inline text-[#0045FF]">(chi siamo) (chi siamo) </p>
                  <p className="inline">(chi siamo)</p>
                </div>
                <div className="flex flex-col w-[661px] space-y-[70px] leading-tight">
                    <div className="text-[42px]">
                      <p className="inline">no, non siamo giovani e dinamici, anche se rischiamo comese avessimo 23 anni. </p>
                    </div>
                    <div className="flex flex-col w-[442px] space-y-[16px]">
                      <p className="text-[22.5px]">usiamo tecniche creative di gruppo per sviluppare idee efficaci.</p>
                      <div>
                        <p className="inline text-[21.5px]">significa che la capacità del team di elaborare un procedimento tra il problema e la soluzione è moltiplicata per tutti gli elementi del gruppo che partecipano con le loro competenze e conoscenze: una sorta di cervello collettivo che</p>
                        <p className="inline text-[22.5px] bg-[#0045FF]">amplifica le idee</p>
                        <p className="inline text-[22.5px]">per rendere più fertile il processo creativo.</p>
                      </div>
                    </div>
                </div>
            </div>
            <div className="mt-6"><img src="src\img\span (2).png" alt="line" /></div>
        </div>
      {/* page6 end*/}

      {/* page7*/}
      <div className="flex flex-col w-[1320px] m-auto mt-[240px] space-y-[40px] text-white">
          <div className="divide-y w-[1320px] m-auto mt-[240px]">
              <div></div>
              <div></div>
          </div>
          <div className="flex flex-row space-x-[60px] ">
              <div className="text-[#0045FF] text-[31px] ">premi</div>
              <div className="flex flex-wrap gap-x-[39px] mt-3 ">
                <div className="flex flex-col w-[271px] h-[199px] space-y-[33px] items-center">
                  <img className="w-[173px] h-[27px]" src="src\img\Awwards-logotype-2018.svg_.png.png" alt="logo" />
                  <div className="text-[19px] text-center">
                    <p>3 honorable mentions</p>
                    <p>3 mobile excellence</p>
                  </div>
                </div>
                <div className="flex flex-col w-[222px] h-[199px] space-y-[10px] items-center">
                  <img className="w-[50px] h-[50px]" src="src\img\m.png.png" alt="logo" />
                  <div className="text-[18px] text-center">
                    <p>5 Site of the Day</p>
                  </div>
                </div>
                <div className="flex flex-col w-[339px] h-[199px] space-y-[24px] items-center">
                  <img className="w-[239px] h-[36px]" src="src\img\iduloMMvGF.png.png" alt="logo" />
                  <div className="text-[18px] text-start">
                    <p>4 Special Judge Kudos Award</p>
                    <p>6 Best Innovation</p>
                    <p>6 best Ul design</p>
                    <p>6 best UX design</p>
                    <p>2 Site of the dav</p>
                  </div>
                </div>
                <div className="flex flex-col w-[221px] h-[199px] space-y-[36px] items-center">
                  <img className="w-[117px] h-[24px]" src="src\img\bestcss.png.png" alt="logo" />
                  <div className="text-[18px] text-center">
                    <p>2 Site of the Day</p>
                  </div>
                </div>
                <div className="flex flex-col w-[269px] h-[199px] space-y-[10px] items-center">
                  <img className="w-[144px] h-[50px]" src="src\img\csslight.png.png" alt="logo" />
                  <div className="text-[18px] text-center">
                    <p>2 Featured of the Day</p>

                  </div>
                </div>
              </div>
          </div>
      </div>
      {/* page7 end*/}

      {/* page8*/}
      <div className="flex flex-col w-[1320px] m-auto mt-[240px] space-y-[146px] text-white"> 
        <div className="flex flex-col space-y-[44.75px]">
            <div className="flex flex-col divide-y">
              <div></div>
              <div></div>
            </div>
            <div className="flex flex-row space-x-[193px]">
              <div className="text-[31px] text-[#0045FF]">lettere</div>
              <div className="w-[407px] text-[22.5px]">lettere perché sono fotografie pensate, lettere perché fanno succedere cose incredibili, lettere perché puoi prenderci alla lettera</div>
            </div>
        </div>

        <div className="flex flex-col space-y-[90px] items-center">
          <div className="flex flex-wrap gap-[70px]">
            <div className="flex flex-col gap-y-[34px]">
              <img src="src\img\div (2).png" alt="img" />
              <div className="flex flex-row w-[625px] h-[175px] justify-between items-start">
                <div className="w-[187.5px] text-[22.5px]">Siate creativi, siate originali, distinguetevi. Come?</div>
                <div className="w-[232px] text-[20px]">Siamo alla ricerca di qualcosa di interessante e le persone originali e creative ci aiutano a trovare queste cose. Come imparare queste preziose qualità?</div>
                <button><img className="w-[72px] h-[72px]" src="src\img\+.png" alt="plus" /></button>
              </div>
            </div>

            <div className="flex flex-col gap-y-[34px]">
              <img src="src\img\div (3).png" alt="img" />
              <div className="flex flex-row w-[625px] h-[175px] justify-between items-start">
                <div className="w-[187.5px] text-[22.5px]">L’editing: l’importanza della revisione di un testo</div>
                <div className="w-[232px] text-[20px]">Con la revisione testi garantiamo che ogni carattere, ogni frase e ogni paragrafo trasmetta il messaggio giusto in modo accurato e potente.</div>
                <button><img className="w-[72px] h-[72px]" src="src\img\+.png" alt="plus" /></button>
              </div>
            </div>

            <div className="flex flex-col gap-y-[34px]">
              <img src="src\img\div (4).png" alt="img" />
              <div className="flex flex-row w-[625px] h-[175px] justify-between items-start">
                <div className="w-[187.5px] text-[22.5px]">Creare il marchio: come il payoff e il naming vanno di pari passo</div>
                <div className="w-[232px] text-[20px]">Il payoff è la frase che cattura l'essenza del naming e ciò che rappresenta. È ciò che volete che i vostri clienti ricordino e associno alla vostra azienda.</div>
                <button><img className="w-[72px] h-[72px]" src="src\img\+.png" alt="plus" /></button>
              </div>
            </div>

            <div className="flex flex-col gap-y-[34px]">
              <img src="src\img\angel-of-the-waters-statue.jpg.png" alt="img" />
              <div className="flex flex-row w-[625px] h-[175px] justify-between items-start">
                <div className="w-[187.5px] text-[22.5px]">Logo di successo: guida alla creazione di un’immagine efficace del marchio</div>
                <div className="w-[232px] text-[20px]">Ci sono molti aspetti da considerare quando si progetta un logo di successo. Di seguito una guida che aiuta a creare un'immagine efficace del marchio.</div>
                <button><img className="w-[72px] h-[72px]" src="src\img\+.png" alt="plus" /></button>
              </div>
            </div>

          </div>
      
          <button className="w-[450px] h-[106.5px] py-[22px] px-[200px] border rounded-full"><img src="src\img\+.png" alt="" /></button>
        </div>
        
      </div>
      {/* page8 end*/}

      {/* page9*/}
      <div className="flex flex-col w-[1320px] m-auto mt-[240px] space-y-[46px] text-white">
        <div className="divide-y w-[1320px] m-auto">
            <div></div>
            <div></div>
        </div>
        <div className="flex flex-col space-y-[100px]">
          <div className="flex flex-row justify-between leading-tight items-center mb-[100px]">
              <div className="text-[118.5px]">contatti</div>
              <div className="flex space-x-[30px] text-[28px] underline underline-offset-8">
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">LinkedIn</a>
              </div>
          </div>
          <div className="flex flex-col space-y-[200px] items-end">
              <div className="flex flex-row space-x-[30px]">
                <div className="flex flex-col w-[495px] gap-y-[30px]  divide-y">
                  <div className="flex w-[495px] h-[27px] text-[18px] items-center justify-between">
                    <div>Vorrei conoscervi per parlare di</div>
                    <img className="w-[13px] h-[13px]" src="src\img\+.png" alt="plus" />
                  </div>
                  <div className="flex text-[18px] items-center justify-between">
                    <div>Vorrei conoscervi per parlare di</div>
                    <img className="w-[13px] h-[13px]" src="src\img\+.png" alt="plus" />
                  </div>
                  <input className="outline-none bg-black" type="text" placeholder="Azienda (opzionale)"/>
                  <div></div>
                </div>
                
                <div className="flex flex-col w-[495px] gap-y-[30px]  divide-y">
                  <div className="flex w-[495px] h-[27px] text-[18px] items-center justify-between">
                    <div className="">Vorrei conoscervi per parlare di</div>
                    <img className="w-[13px] h-[13px]" src="src\img\+.png" alt="plus" />
                  </div>
                  <div className="flex text-[18px] items-center justify-between">
                    <div>Vorrei conoscervi per parlare di</div>
                    <img className="w-[13px] h-[13px]" src="src\img\+.png" alt="plus" />
                  </div>
                  <input className="outline-none bg-black" type="text" placeholder="Azienda (opzionale)"/>
                  <div></div>
                </div>
              </div>
              

              <div className="flex flex-col w-[1020px] gap-y-[30px] items-start">
                  <div className="divide-y w-[1020px] ml-auto">
                    <div></div>
                    <div></div>
                  </div>
                  <div className="flex flex-row w-[990px] h-[27px] text-[18px] items-center justify-between">
                        <div className="flex flex-col w-[648px] gap-y-[30px] mt-16">
                            <div className="flex flex-row space-x-[10px]">
                              <input type="checkbox" defaultChecked className="checkbox" />
                              <div>Spuntando questa casella ci autorizzi al trattamento dei tuoi dati personali, ne avremo cura.</div>
                            </div>
                            <div className="flex flex-row space-x-[10px]">
                              <input type="checkbox" defaultChecked className="checkbox" />
                              <div>Spuntando questa casella ci autorizzi al trattamento dei tuoi dati personali, ne avremo cura.</div>
                            </div>
                        </div>
                        <button className="w-[210px] h-[70px] border rounded-full px-[80px] py-[20px] mt-10">invia</button>
                  </div>
              </div>
              <div className="flex flex-col w-[1320px] space-y-[15px] items-center">
                  <div className="divide-y w-[1320px] ml-auto">
                    <div></div>
                    <div></div>
                  </div>
                  <div  className="flex flex-row w-[1320px]  text-[18px] items-center justify-between">
                    
                    <div>Caroselling | Copyright 2022 | P.IVA 02472870209 | Mantua, Italy and everywhere</div>

                    <div className="flex flex-row gap-[30px]">
                      <a className="underline underline-offset-8">Privacy Policy</a>
                      <div>|</div>
                      <a className="underline underline-offset-8">Cookie Policy</a>
                      <div>|</div>
                      <a className="underline underline-offset-8">Terms & Conditions</a>
                    </div>
                    
                  </div>
              </div>
          </div>

        </div>
        <div></div>
      </div>

      {/* page9 end*/}
    </div>
    /*Header End*/

    
  )
}

export default App

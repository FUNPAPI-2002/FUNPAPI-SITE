export default function Contact() {
  return (
    <section id="contact" className="bg-foreground text-card py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12">CONTATO</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form 
  action="https://formsubmit.co/5022033054e9ab830d90f6a8b7ff6dce" 
  method="POST" 
  className="space-y-6"
>
  <input type="hidden" name="_next" value="https://funpapi-2002.github.io/FUNPAPI-SITE/" />
  
  <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="name" className="block mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card/10 border border-card/30 text-card placeholder:text-card/50 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card/10 border border-card/30 text-card placeholder:text-card/50 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card/10 border border-card/30 text-card placeholder:text-card/50 focus:outline-none focus:border-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <p className="leading-relaxed">
                Rua Fabrício de Area Leao, 2350, Pq. Itararé<br />
                CEP : 64078-770 - Teresina - PI
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                CNPJ: 05.201.972/0001-68
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                Fone: (86) 3081-3803
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                Email – funpapi@hotmail.com
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                Email – funpapi2012@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

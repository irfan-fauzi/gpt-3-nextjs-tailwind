import { Gap } from "../../../atomic"


const Features = () => {
  const features = [
    {
      title: "Improving end distrusts instantly", 
      subTitle: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
      title: "Become the tended active",
      subTitle: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
      title: "Message or am nothing",
      subTitle: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
      title: "Really boy law county",
      subTitle: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    }
  ]
  return (
    <section className="max-w-screen-xl mx-auto px-4 ">
        <article className="flex lg:gap-[7rem] lg:flex-row flex-col">
          <section className="lg:w-6/12">
            <h3 className="lg:text-4xl text-2xl font-bold text-transparent  text-gradient lg:w-11/12">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h3>
            <Gap className="h-10" />
            <button className="border px-4 py-4 border-gray-500 text-transparent text-gradient font-semibold">Request Early Access to Get Started</button>
          </section>
          <Gap className="h-10 lg:hidden block" />
          <section className="lg:w-8/12 flex flex-col gap-8">
            {
              features.map(el => (
                <article key={el.title} className="flex lg:gap-[2rem] lg:items-end lg:flex-row flex-col">
                  <div className="lg:w-4/12">
                    <h2 className="font-black text-transparent text-gradient">_____</h2>
                    <h4 className="text-gray-300 font-bold text-xl lg:w-10/12 text">{el.title}</h4>
                  </div>

                  <div className="lg:w-8/12">
                    <p className="text-gray-400 font-light w-10/12">{el.subTitle}</p>
                  </div>
                </article>
              ))
            }
           
          </section>
        </article>
        
      </section>
  )
}

export default Features

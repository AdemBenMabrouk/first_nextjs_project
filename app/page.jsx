import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl sm:text-2xl xs:text-sm">
  Share your <br className="max-md:hidden"></br>
  <span className="orange_gradient text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:text-lg ">
    Thoughts, Ideas, Opinions...etc!
  </span>
</h1>

        <p className="desc text-center">
            Shaaare what's on your mind without restriction ! xd 
        </p>

        <Feed/>

    </section>
  )
}

export default Home
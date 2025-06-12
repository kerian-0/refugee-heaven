
export default function HeroComponent() {
  return (
   <>
     <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.freepik.com/free-photo/photorealistic-refugee-camp_23-2151446251.jpg?semt=ais_hybrid&w=740)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-md">
      <h3 className="mb-5 text-5xl font-bold flex">Empowering Refugee Communities</h3>
      <p className="mb-5">
        Providing Resource and support for a better future
      </p>
      <button className="btn btn-info">Get Started</button>
    </div>
  </div>
</div>
   </>
  )
}

export const ShowCaseSection = () => {
  return (
    <section className="container my-40 px-10" id="section-show-case">
      <h2 className="mb-10 text-center font-ojuju text-7xl font-bold">
        Prove that I deserve a good new <br /> opportunity
      </h2>
      <ul className="grid grid-cols-3 gap-10">
        <li className="border border-masala-800">
          <img src="/home/show-case-1.png" alt="show-case" className="w-full object-cover" />
          <div className="bg-white py-6 text-center font-roobert text-3xl font-bold leading-10 text-masala-800">SaboMall</div>
        </li>
        <li className="border border-masala-800">
          <img src="/home/show-case-1.png" alt="show-case" className="w-full object-cover" />
          <div className="bg-white py-6 text-center font-roobert text-3xl font-bold leading-10 text-masala-800">SaboMall</div>
        </li>{" "}
        <li className="border border-masala-800">
          <img src="/home/show-case-1.png" alt="show-case" className="w-full object-cover" />
          <div className="bg-white py-6 text-center font-roobert text-3xl font-bold leading-10 text-masala-800">SaboMall</div>
        </li>
      </ul>
    </section>
  )
}

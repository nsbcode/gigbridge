export const Button =  (props) => {
    return (
        <button className="relative text-white py-3 px-6 rounded-3xl font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ">
        <div className="absolute inset-0">
          <div className="rounded-3xl border border-black absolute inset-0 [mask-image:linear-gradient(to_bottom,black, transparent)]"></div>
          <div className="rounded-3xl border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black, transparent)]"></div>
          <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-3xl"></div>
        </div>
        <span>{props.children}</span>
      </button>
    )
}
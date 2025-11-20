export default async function Page() {
    return (
    <div className="flex flex-col min-w-fit w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border justify-center">
      {/* Mobile view - single column */}
      <div className="block">
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Telegram</p>
          <p className="block text-sm text-slate-800">@MeliRoman</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Номер телефона</p>
          <p className="block text-sm text-slate-800">89648987475</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">e-mail</p>
          <p className="block text-sm text-slate-800">melikvov@mail.ru</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">ВК</p>
          <p className="block text-sm text-slate-800">https://vk.com/id613022997</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Github</p>
          <p className="block text-sm text-slate-800">https://github.com/MelikovMan</p>
        </div>
       
      </div>
    </div>
    )
}
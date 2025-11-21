import { baseUri } from "app/(ru)/sitemap"
export default async function Resume() {
  return <>
    <div className="w-full flex-wrap">
      <h3 className="text-lg font-semibold ml-3 text-slate-800">Резюме</h3>
      <p className="text-slate-500 mb-5 ml-3">Основная информация обо мне.</p>
    </div>
    <div className="flex flex-col min-w-fit w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border justify-center">
      {/* Mobile view - single column */}
      <div className="block md:hidden">
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">ФИО</p>
          <p className="block text-sm text-slate-800">Меликов Роман Магомедович</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Дата рождения</p>
          <p className="block text-sm text-slate-800">23.08.2002 г.</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Место рождения</p>
          <p className="block text-sm text-slate-800">Урай</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Школа</p>
          <p className="block text-sm text-slate-800">МГАОУ СОШ №6, 11 классов (2009-2020)</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">ВУЗ</p>
          <p className="block text-sm text-slate-800">КубГУ, бакалаврат (2020-2024)</p>
          <p className="block text-sm text-slate-800">КубГУ, магистратура (2024-2025)</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Средний балл</p>
          <p className="block text-sm text-slate-800">КубГУ, бакалаврат: 5.0</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Владение языками</p>
          <p className="block text-sm text-slate-800">Русский: родной</p>
          <p className="block text-sm text-slate-800">Английский: C1</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Увлечения</p>
          <p className="block text-sm text-slate-800">Игры, книги, музыка. Автоспорт.</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Личные качества</p>
          <p className="block text-sm text-slate-800">Я любознательный, легко обучаюсь.</p>
          <p className="block text-sm text-slate-800">Целеустремленный, стрессоустойчивый.</p>
          <p className="block text-sm text-slate-800">Добросовестен и коммуникабелен.</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Профессиональная специализация</p>
          <p className="block text-sm text-slate-800">HTML5, CSS, Javascript на продвинутом уровне</p>
          <p className="block text-sm text-slate-800">Python, Node.js, на среднем уровне.</p>
          <p className="block text-sm text-slate-800">React на продвинутом уровне.</p>
          <p className="block text-sm text-slate-800">Git, Github, Github Airflows</p>
          <p className="block text-sm text-slate-800">Docker, Docker-compose,</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Планы на будущее</p>
          <p className="block text-sm text-slate-800">Хочу развиваться как frontend-разработчик в дальнейшем.</p>
        </div>
        <div className="p-4 border-b border-slate-200">
          <p className="block text-sm font-semibold text-slate-800 mb-2">Контактная информация</p>
          <p className="block underline">      
            <a href=" contact-info" rel="nofollow">Подробная контактная информация</a>
          </p>  
        </div>
      </div>

      </div>
            <div className="hidden md:block">
      <table className="w-full text-left">
        <tbody className="block">
          <tr className="hover:bg-slate-50">
            <td className="p-4  border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">ФИО</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">Меликов Роман Магомедович</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4  border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Дата рождения</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">23.08.2002 г.</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Место рождения</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">Урай</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Школа</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">МГАОУ СОШ №6, 11 классов (2009-2020)</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">ВУЗ</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">КубГУ, бакалаврат (2020-2024)</p>
              <p className="block text-sm text-slate-800">КубГУ, магистратура (2024-2025)</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Средний балл</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">КубГУ, бакалаврат: 5.0</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Владение языками</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">Русский: родной</p>
              <p className="block text-sm text-slate-800">Английский: C1</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Увлечения</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">Игры, книги, музыка. Автоспорт.</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Личные качества</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">Я любознательный, легко обучаюсь.</p>
              <p className="block text-sm text-slate-800">Целеустремленный, стрессоустойчивый.</p>
              <p className="block text-sm text-slate-800">Добросовестен и коммуникабелен.</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Профессиональная специализация</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">HTML5, CSS, Javascript на продвинутом уровне</p>
              <p className="block text-sm text-slate-800">Python, Node.js, на среднем уровне.</p>
              <p className="block text-sm text-slate-800">React на продвинутом уровне.</p>
              <p className="block text-sm text-slate-800">Git, Github, Github Airflows</p>
              <p className="block text-sm text-slate-800">Docker, Docker-compose,</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Планы на будущее</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm text-slate-800">Хочу развиваться как frontend-разработчик в дайльнейшем.</p>
            </td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200">
              <p className="block text-sm font-semibold text-slate-800">Контактная информация</p>
            </td>
            <td className="p-4 border-b border-slate-200">
              <p className="block underline">
                <a href={`${baseUri}/contact-info`} rel="nofollow">Подробная контактная информация</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
}
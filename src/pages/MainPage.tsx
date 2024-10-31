import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <header className="">
        <div className="text-[22px] pb-5 text-[#c93e54]">
          Ход торгов <strong>Тестовые торги</strong>
        </div>
        <hr />
      </header>
      <main className="flex flex-col p-5 gap-7">
        <p className="bg-[#f9f2f4] text-[#c93e54] flex flex-col">
          Уважаемые участники, во время вашего хода вы можете изменить параметры
          торгов, указанных в таблице
        </p>

        {/* <div className="table">
          <table>
            <thead>
              <tr>
                <th>ХОД</th>
                <th>
                  <div className="timer text-center py-4 bg-[#f2dede] text-[#c93e54]">
                    00:00
                  </div>
                </th>
              </tr>
              <tr>
                <th>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</th>
                <th>УЧАСТНИК №1</th>
                <th>УЧАСТНИК №2</th>
                <th>УЧАСТНИК №3</th>
                <th>УЧАСТНИК №4</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="params">
                  Наличие комплекса мероприятий, повышающих стандарты качества
                  изготовления
                </td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="params">Срок изготовления лота, дней</td>
                <td>80</td>
                <td>90</td>
                <td>75</td>
                <td>120</td>
              </tr>
              <tr>
                <td className="params">Гарантийные обязательства, мес</td>
                <td>24</td>
                <td>24</td>
                <td>22</td>
                <td>36</td>
              </tr>
              <tr>
                <td className="params">Условия оплаты</td>
                <td>30%</td>
                <td>100%</td>
                <td>60%</td>
                <td>50%</td>
              </tr>
              <tr>
                <td className="params">
                  Стоимость изготовления лота, руб. (без НДС)
                </td>
                <td className="price">3,700,000 руб.</td>
                <td className="price">3,200,000 руб.</td>
                <td className="price">2,800,000 руб.</td>
                <td className="price">2,500,000 руб.</td>
              </tr>
              <tr>
                <td className="params">Скидка</td>
                <td className="discount">-25,000 руб.</td>
                <td className="discount">-25,000 руб.</td>
                <td className="discount">-25,000 руб.</td>
                <td className="discount">-25,000 руб.</td>
              </tr>
              <tr>
                <td className="params">Итоговая стоимость, руб.</td>
                <td className="total">2,475,000 руб.</td>
                <td className="total">2,475,000 руб.</td>
                <td className="total">2,475,000 руб.</td>
                <td className="total">2,475,000 руб.</td>
              </tr>
            </tbody>
          </table>
        </div> */}


        <Outlet />
      </main>
    </>
  );
}
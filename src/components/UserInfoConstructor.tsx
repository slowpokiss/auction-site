import { userInterface } from "../pages/Admin";

interface userInfoConstructorProps {
  users: any;
}


export default function UserInfoConstructor({ users }: userInfoConstructorProps) {
  return <>
  {
    users.length > 0 ?
    <tbody>
      <tr>
        <td className="params">
          Наличие комплекса мероприятий, повышающих стандарты качества
          изготовления
        </td>
        {
          users.map(() => <td className="params">-</td>)
        }
      </tr>
      <tr>
        <td className="params">Срок изготовления лота, дней</td>
        {
          users.map((user: userInterface) => <td className="params">{user.userData.days}</td>)
        }
      </tr>
      <tr>
        <td className="params">Гарантийные обязательства, мес</td>
        {
          users.map((user: userInterface) => <td className="params">{user.userData.warranty}</td>)
        }
      </tr>
      <tr>
        <td className="params">Условия оплаты</td>
        {
          users.map((user: userInterface) => <td className="params">{user.userData.payment}%</td>)
        }
      </tr>
      <tr>
        <td className="params">
          Стоимость изготовления лота, руб. (без НДС)
        </td>
        {
          users.map((user: userInterface) => <td className="params">{user.bid}%</td>)
        }
      </tr>
      {/* <tr>
        <td className="params">Скидка</td>
        <td className="params"></td>
      </tr> */}
      {/* <tr>
        <td className="params">Итоговая стоимость, руб.</td>
      </tr> */}
    </tbody>: null
  }
  </>
  
  
}
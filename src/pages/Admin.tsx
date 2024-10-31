import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserInfoConstructor from "../components/userInfoConstructor";

export interface userInterface {
  id: number;
  role: string;
  bid: number;
  userData: {
    days: number;
    warranty: number;
    payment: number;
  };
}

function getUsersFiltered(userList: any) {
  return userList.filter((user: userInterface) => !user.role.includes("admin"));
}

export default function Admin() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [currentBid, setCurrentBid] = useState(0);
  const [auctionStatus, setAuctionStatus] = useState(false);
  const [wsError, setWsError] = useState("");
  const [users, updateUsers] = useState([]);

  const { role } = useParams();

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:3000/${role}`);
    setSocket(ws);
    console.log("con");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        //console.log(data);
        updateUsers(getUsersFiltered(data.users));

        switch (data.type) {
          case "started":
            setAuctionStatus(true);
            break;

          case "ended":
            setAuctionStatus(false);
            break;

          case "bidUpdated":
            setCurrentBid(data.price);
            break;

          default:
            break;
        }
      } catch (error) {
        console.log(event.data);
        setWsError(event.data);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  // const handleBid = () => {
  //   if (myTurn && socket) {
  //     const newBid = currentBid + 10;
  //     socket.send(JSON.stringify({ type: "bid", price: newBid }));
  //     setMyTurn(false);
  //   }
  // };

  const startAuction = () => {
    if (socket) {
      socket.send(JSON.stringify({ type: "started" }));
    }
  };

  const endAuction = () => {
    if (socket) {
      socket.send(JSON.stringify({ type: "ended" }));
    }
  };

  return (
    <>
      {wsError ? (
        <div className="">{wsError}</div>
      ) : (
        <div className="table">
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
                {users
                  .map((user: userInterface) => (
                    <th
                      key={user.id}
                      className="params"
                    >
                      <p>{`Участник №${user.id}`}</p>
                      <p>{user.role}</p>
                    </th>
                  ))}
              </tr>
            </thead>

            <UserInfoConstructor users={users} />

            {/* <tbody>
              <tr>
                <td className="params">
                  Наличие комплекса мероприятий, повышающих стандарты качества
                  изготовления
                </td>
              </tr>
              <tr>
                <td className="params">Срок изготовления лота, дней</td>
              </tr>
              <tr>
                <td className="params">Гарантийные обязательства, мес</td>
              </tr>
              <tr>
                <td className="params">Условия оплаты</td>
              </tr>
              <tr>
                <td className="params">
                  Стоимость изготовления лота, руб. (без НДС)
                </td>
              </tr>
              <tr>
                <td className="params">Скидка</td>
              </tr>
              <tr>
                <td className="params">Итоговая стоимость, руб.</td>
              </tr>
            </tbody> */}
          </table>
        </div>
      )}

      <h1>Текущая цена: {currentBid}</h1>
      {role?.includes("admin") ? (
        <div>
          {!auctionStatus ? (
            <button onClick={startAuction}>Начать торги</button>
          ) : (
            <button onClick={endAuction}>Завершить торги</button>
          )}
        </div>
      ) : (
        <>
          {/* {auctionStatus === "active" && myTurn && (
        <button onClick={handleBid}>Сделать ставку</button>
      )} */}
        </>
      )}
    </>
  );
}

{
  /*     <div className="table">
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
</div> */
}

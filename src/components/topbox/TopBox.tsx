import "./topBox.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topbox">
      {topDealUsers.map((dealUser) => (
        <div className="chat-main active" key={dealUser.id}>
          <div className="for-side">
            <div className="img-friend">
              <img src={dealUser.img} alt="" />
              <span className="active_user"></span>
            </div>
            <div className="message-sender">
              <div className="sended-on">
                <span className="name-of-sender d-block">
                  {dealUser.username}
                  <span className="latest-message">
                    {dealUser.email}
                  </span>
                </span>
                <span className="amount">{`$${dealUser.amount}`}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBox;

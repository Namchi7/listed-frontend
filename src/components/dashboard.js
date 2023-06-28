import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./css/dashboard.module.css";
import dashboardIcon from "../assets/images/dashboardIcon.svg";
import transactionIcon from "../assets/images/transactionIcon.svg";
import scheduleIcon from "../assets/images/scheduleIcon.svg";
import userIcon from "../assets/images/userIcon.svg";
import settingIcon from "../assets/images/settingIcon.svg";
import searchIcon from "../assets/images/searchIcon.svg";
import notificationIcon from "../assets/images/notification.svg";
import dpImg from "../assets/images/dp.png";
import revenueIcon from "../assets/images/revenue.svg";
import transactionCIcon from "../assets/images/transactions-card.svg";
import likesIcon from "../assets/images/likes.svg";
import usersCIcon from "../assets/images/users-card.svg";
import dArrIcon from "../assets/images/downArrow.svg";
import rightArrIcon from "../assets/images/rightArrow.svg";
import { fetchDashboardData } from "./redux/reducers/getDashboardSlice";

import GetLineChart from "./lineChart";
import GetPieChart from "./pieChart";

const baseUrl = window.location.origin;

function Dashboard() {
  const { user, logout } = useAuth0();
  const dispatch = useDispatch();

  const dashboardData = useSelector((state) => state.dashboard.data);
  const loading = useSelector((state) => state.dashboard.isLoading);
  // console.log(baseUrl);

  const getFormattedNum = (num) => {
    let no = num.toString().split("").reverse().join("");
    let newNum = "";
    for (let i = 0; i < no.length; i++) {
      if ((i + 1) % 3 === 0 && i + 1 !== no.length)
        newNum = newNum + no[i] + ",";
      else newNum = newNum + no[i];
    }
    return newNum.split("").reverse().join("");
  };

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.upperPart}>
          <div className={styles.boardText}>Board.</div>

          <div className={styles.navLinks}>
            <div className={styles.nav}>
              <div className={styles.navIconDiv}>
                <img
                  src={dashboardIcon}
                  alt="Dashboard"
                  className={styles.navIcon}
                />
              </div>

              <div className={`${styles.navText} ${styles.navTextActive}`}>
                Dashboard
              </div>
            </div>

            <div className={styles.nav}>
              <div className={styles.navIconDiv}>
                <img
                  src={transactionIcon}
                  alt="Transactions"
                  className={styles.navIcon}
                />
              </div>

              <div className={styles.navText}>Transactions</div>
            </div>

            <div className={styles.nav}>
              <div className={styles.navIconDiv}>
                <img
                  src={scheduleIcon}
                  alt="Schedules"
                  className={styles.navIcon}
                />
              </div>

              <div className={styles.navText}>Schedules</div>
            </div>

            <div className={styles.nav}>
              <div className={styles.navIconDiv}>
                <img src={userIcon} alt="Users" className={styles.navIcon} />
              </div>

              <div className={styles.navText}>Users</div>
            </div>

            <div className={styles.nav}>
              <div className={styles.navIconDiv}>
                <img
                  src={settingIcon}
                  alt="Settings"
                  className={styles.navIcon}
                />
              </div>

              <div className={styles.navText}>Settings</div>
            </div>
          </div>
        </div>

        <div className={styles.lowerPart}>
          <div className={styles.lowerItem}>Help</div>
          <div className={styles.lowerItem}>Contact Us</div>
        </div>
      </div>

      <div className={styles.dataCont}>
        <div className={styles.dataHeader}>
          <div className={styles.dataHeading}>Dashboard</div>
          <div className={styles.dataHeadRight}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
              <div className={styles.searchIconDiv}>
                <img
                  src={searchIcon}
                  alt="Search"
                  className={styles.searchIcon}
                />
              </div>
            </div>

            <div className={styles.notificationDiv}>
              <img
                src={notificationIcon}
                alt="Notifications"
                className={styles.notificationIcon}
              />
            </div>

            <div
              onClick={() => {
                if (user)
                  logout({
                    logoutParams: { returnTo: `${baseUrl}/signin` },
                  });
              }}
              className={styles.dpDiv}
            >
              <img src={dpImg} alt="User's Name" className={styles.dpImg} />
            </div>
          </div>
        </div>

        <div className={styles.previewCards}>
          <div style={{ backgroundColor: "#DDEFE0" }} className={styles.card}>
            <div className={styles.cardIconDiv}>
              <img
                src={revenueIcon}
                alt="Revenue"
                className={styles.cardIcon}
              />
            </div>

            <div className={styles.cardName}>Total Revenue</div>

            <div className={styles.cardData}>
              {!loading
                ? `$${getFormattedNum(
                    dashboardData?.previewCards?.totalRevenue
                  )}`
                : "000"}
            </div>
          </div>

          <div style={{ backgroundColor: "#F4ECDD" }} className={styles.card}>
            <div className={styles.cardIconDiv}>
              <img
                src={transactionCIcon}
                alt="Transactions"
                className={styles.cardIcon}
              />
            </div>

            <div className={styles.cardName}>Total Transactions</div>

            <div className={styles.cardData}>
              {!loading
                ? `${getFormattedNum(
                    dashboardData?.previewCards?.totalTransactions
                  )}`
                : "000"}
            </div>
          </div>

          <div style={{ backgroundColor: "#EFDADA" }} className={styles.card}>
            <div className={styles.cardIconDiv}>
              <img src={likesIcon} alt="Likes" className={styles.cardIcon} />
            </div>

            <div className={styles.cardName}>Total Likes</div>

            <div className={styles.cardData}>
              {!loading
                ? `${getFormattedNum(dashboardData?.previewCards?.totalLikes)}`
                : "000"}
            </div>
          </div>

          <div style={{ backgroundColor: "#DEE0EF" }} className={styles.card}>
            <div className={styles.cardIconDiv}>
              <img src={usersCIcon} alt="Users" className={styles.cardIcon} />
            </div>

            <div className={styles.cardName}>Total Users</div>

            <div className={styles.cardData}>
              {!loading
                ? `${getFormattedNum(dashboardData?.previewCards?.totalUsers)}`
                : "000"}
            </div>
          </div>
        </div>

        <div className={styles.activitiesGraphDiv}>
          <div className={styles.chartHeader}>
            <div className={styles.chartHeadLeft}>
              <div className={styles.activities}>Activities</div>

              <div className={styles.activitiesDateBox}>
                <div className={styles.activitiesDate}>May - June 2021</div>
                <div className={styles.dArrDiv}>
                  <img
                    src={dArrIcon}
                    alt="Select Date"
                    className={styles.dArrIcon}
                  />
                </div>
              </div>
            </div>

            <div className={styles.chartHeadRight}>
              <div className={styles.legend}>
                <div
                  style={{
                    backgroundColor: `${
                      !loading
                        ? dashboardData?.lineChart?.lineColors?.guest
                        : "#000"
                    }`,
                  }}
                  className={styles.legendColor}
                ></div>
                <div className={styles.legendName}>Guest</div>
              </div>

              <div className={styles.legend}>
                <div
                  style={{
                    backgroundColor: `${
                      !loading
                        ? dashboardData?.lineChart?.lineColors?.user
                        : "#000"
                    }`,
                  }}
                  className={styles.legendColor}
                ></div>
                <div className={styles.legendName}>User</div>
              </div>
            </div>
          </div>

          {!loading && (
            <GetLineChart
              data={dashboardData?.lineChart?.data}
              className={styles.lineChart}
            />
          )}
        </div>

        <div className={styles.productsAndSchedules}>
          <div className={styles.products}>
            <div className={styles.prodHead}>
              <div className={styles.prodHeading}>Top Products</div>

              <div className={styles.productDateDiv}>
                <div className={styles.productDate}>May - June 2021</div>

                <div className={styles.productDateDArr}>
                  <img
                    src={dArrIcon}
                    alt="Select Date"
                    className={styles.pdArrIcon}
                  />
                </div>
              </div>
            </div>

            <div className={styles.prodBody}>
              <div className={styles.pieChart}>
                {!loading && <GetPieChart data={dashboardData?.pieChart} />}
              </div>

              <div className={styles.pieLegends}>
                {!loading &&
                  dashboardData?.pieChart.map((item, index) => {
                    return (
                      <div className={styles.legend} key={index}>
                        <div
                          style={{ backgroundColor: `${item.color}` }}
                          className={styles.prodLegendColor}
                        ></div>

                        <div className={styles.legendInfo}>
                          <div className={styles.prodLegendName}>
                            {item.name}
                          </div>

                          <div className={styles.legendValue}>
                            {item.value}%
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/* <div className={styles.legend}>
                  <div
                    style={{ backgroundColor: "#98D89E" }}
                    className={styles.prodLegendColor}
                  ></div>

                  <div className={styles.legendInfo}>
                    <div className={styles.prodLegendName}>Basic Tees</div>

                    <div className={styles.legendValue}>55%</div>
                  </div>
                </div>

                <div className={styles.legend}>
                  <div
                    style={{ backgroundColor: "#F6DC7D" }}
                    className={styles.prodLegendColor}
                  ></div>

                  <div className={styles.legendInfo}>
                    <div className={styles.prodLegendName}>
                      Custom Short Pants
                    </div>

                    <div className={styles.legendValue}>31%</div>
                  </div>
                </div>

                <div className={styles.legend}>
                  <div
                    style={{ backgroundColor: "#EE8484" }}
                    className={styles.prodLegendColor}
                  ></div>

                  <div className={styles.legendInfo}>
                    <div className={styles.prodLegendName}>Super Hoodies</div>

                    <div className={styles.legendValue}>14%</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className={styles.schedules}>
            <div className={styles.scheduleHead}>
              <div className={styles.scheduleHeading}>Today’s schedule</div>
              <div className={styles.seeAllDiv}>
                <div className={styles.seeAll}>See All</div>

                <div className={styles.rArrDiv}>
                  <img
                    src={rightArrIcon}
                    alt="See All"
                    className={rightArrIcon}
                  />
                </div>
              </div>
            </div>

            <div className={styles.scheduleBody}>
              {!loading &&
                dashboardData?.schedules.map((item, index) => {
                  return (
                    <div className={styles.schedule} key={index}>
                      <div
                        style={{ backgroundColor: `${item.color}` }}
                        className={styles.rightBar}
                      ></div>

                      <div className={styles.scheduleInfo}>
                        <div className={styles.scheduleTitle}>{item.title}</div>

                        <div className={styles.scheduleTime}>{item.time}</div>

                        <div className={styles.scheduleLocation}>
                          {item.location}
                        </div>
                      </div>
                    </div>
                  );
                })}
              {/* <div className={styles.schedule}>
                <div
                  style={{ backgroundColor: "#9BDD7C" }}
                  className={styles.rightBar}
                ></div>

                <div className={styles.scheduleInfo}>
                  <div className={styles.scheduleTitle}>
                    Meeting with suppliers from Kuta Bali
                  </div>

                  <div className={styles.scheduleTime}>14.00-15.00</div>

                  <div className={styles.scheduleLocation}>
                    at Sunset Road, Kuta, Bali
                  </div>
                </div>
              </div>

              <div className={styles.schedule}>
                <div
                  style={{ backgroundColor: "#6972C3" }}
                  className={styles.rightBar}
                ></div>

                <div className={styles.scheduleInfo}>
                  <div className={styles.scheduleTitle}>
                    Meeting with suppliers from Kuta Bali
                  </div>

                  <div className={styles.scheduleTime}>14.00-15.00</div>

                  <div className={styles.scheduleLocation}>
                    at Sunset Road, Kuta, Bali
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

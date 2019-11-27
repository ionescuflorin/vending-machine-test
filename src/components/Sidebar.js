import React from 'react';
import BalancePanel from '../containers/BalancePanel';
import BanknotePanel from '../containers/BanknotePanel';
import PurchasedProductList from '../containers/PurchasedProductList';

const Sidebar = () => (
  <section className="sidebar">
    <BalancePanel />
    <BanknotePanel banknotes={[1, 2, 5, 10, 20, 50]} />
    <PurchasedProductList />
  </section>
);

export default Sidebar;

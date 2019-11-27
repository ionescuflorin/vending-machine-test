import React from 'react';
import PropTypes from 'prop-types';
import PurchasedProductListItem from '../components/PurchasedProductListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';

const ProductList = ({ products }) => (
  <React.Fragment>
    <h5 class="h5 text-center">Items Purchased</h5>
    <hr />
    <section className="conatiner">
      <div className="row">
        {map(products, (product, index) => (
          <div key={index} className="col-sm-6">
            <PurchasedProductListItem product={product} />
          </div>
        ))}
      </div>
    </section>
  </React.Fragment>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  )
};

const mapStateToProps = state => ({
  products: state.purchasedProducts.map(id => state.products.data[id])
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

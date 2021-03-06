import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductListItem from '../components/ProductListItem';
import map from 'lodash/map';
import { buyProduct } from '../redux/actions';

const ProductList = ({ products, balance, onProductClick }) => (
  <section className="row">
    {products.loading
      ? 'Loading products...'
      : map(products.data, product => (
          <div
            key={product.id}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center"
          >
            <ProductListItem
              product={product}
              balance={balance}
              onClick={onProductClick}
            />
          </div>
        ))}
  </section>
);

ProductList.propTypes = {
  products: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
  }).isRequired,
  balance: PropTypes.object.isRequired,
  onProductClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products,
  balance: state.balance
});

const mapDispatchToProps = dispatch => ({
  onProductClick: id => dispatch(buyProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


import { Component } from 'react';

import Header from '../header/header';
import AboutsUs from '../aboutsus/aboutsus';
import OurBest from '../ourbest/ourbest';
import Footer from '../footer/footer';
import OurCoffee from '../ourcoffee/ourcoffee';
import OurBeans from '../ourbeans/ourbeans';
import SearchPanel from '../searchPanel/searchPanel';
import SearchFilter from '../searchFilter/searchFilter';
import ProductList from '../product_list/product_list';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component  {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {product: 'Brazil', name: 'Solimo Coffee Beans 2 kg', price: 10, id: 1},
        {product: 'Kenya', name: 'clock nice', price: 5, id: 2},
        {product: 'Columbia', name: 'differetntsd', price: 8, id: 3},
        {product: 'Brazil', name: 'lAROMISTICO Coffee 1 kg', price: 6.99, id: 4}
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4;
  }
  
  searchProd = (items, term) => {
    if (term.length === 0){
      return items;
    }

    return items.filter (item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) =>{
    this.setState({term}); // то же самое как term: term
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'Brazil':
        return items.filter(item => item.product === 'Brazil');
      case 'Kenya':
        return items.filter(item => item.product === 'Kenya');
      case 'Columbia':
        return items.filter(item => item.product === 'Columbia');  
      default:
        return items  
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render () {
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchProd(data, term), filter);

    return (
      <div className="App">
        <Header/>
        <AboutsUs/>
        <OurBest data = {data}/>
        <OurCoffee/>
        <OurBeans/>
        <SearchPanel 
          onUpdateSearch={this.onUpdateSearch}
          />
        <SearchFilter filter={filter} 
          onFilterSelect={this.onFilterSelect}/>
        <ProductList data = {visibleData}/>
        <Footer/>
      </div>
    );
  }    
}

export default App;

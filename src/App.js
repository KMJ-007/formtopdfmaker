import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf';

import React, { Component } from 'react';

export default class App extends Component {
   
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.pdfMaker=this.pdfMaker.bind(this);
  }
  pdfMaker = () =>{
    var doc = new jsPDF('portrait','px','a4','false');
    
    // console.log(this.state.value);.
    var text=`Lorem Ipsum
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lacus tristique, ullamcorper odio id, aliquet velit. Integer eu lacinia quam. Sed vulputate eros a nibh imperdiet consectetur. Aliquam sed orci vel sem pulvinar aliquam sit amet ac neque. Integer a scelerisque est, non suscipit magna. Donec a ex et mi feugiat vulputate. Mauris quis libero metus. Nullam vitae convallis nunc. Donec porttitor sapien non massa congue fringilla. Nullam lacus velit, pretium sit amet augue non, cursus aliquam felis. Duis ut convallis enim. Maecenas ut nibh ultrices, placerat turpis sed, egestas ipsum.'
    
    'Suspendisse eget pulvinar eros, nec pulvinar velit. Donec id pretium tellus, ut dapibus lectus. Suspendisse consequat commodo mauris, id tristique arcu dapibus dictum. Suspendisse non malesuada lectus. Suspendisse enim diam, elementum vel lectus vitae, ornare tristique diam. Integer sed ligula sit amet diam sodales condimentum. Nam tristique tristique sapien eu porttitor. Proin non cursus ex. Aliquam consectetur risus sapien, sit amet congue velit luctus vitae. Ut eu semper orci.'
    
    'Aenean efficitur suscipit diam, ut maximus velit vulputate sed. Phasellus vel massa ac nisl sollicitudin auctor. Vestibulum ac convallis libero. Donec posuere metus nisl, eget lobortis lorem accumsan et. Etiam tincidunt nisi nunc, in fringilla nisl mollis in. Suspendisse facilisis ante eu gravida lobortis. Cras sodales gravida aliquet. Nullam sit amet sodales dui. Nam lacinia nulla elit, eget tincidunt elit pulvinar sit amet. Maecenas nisi nibh, luctus nec lobortis non, viverra nec arcu. Aliquam ultrices eleifend pellentesque. Suspendisse potenti. Donec justo leo, tincidunt eget vestibulum eu, ullamcorper vitae odio.'
    
    'Nam sed libero lobortis, bibendum lacus sed, imperdiet nulla. Cras faucibus dolor eget urna malesuada, non venenatis lacus lobortis. Maecenas tempus, lorem vitae fringilla posuere, felis risus mattis sapien, non vestibulum est ex non orci. Vivamus ac ante et ipsum facilisis semper. Donec vitae ligula sapien. Suspendisse efficitur magna magna, eu vehicula nisi mollis vel. Aenean ac accumsan purus, at tristique nisl. Duis facilisis, turpis vitae hendrerit elementum, mauris odio tempor quam, sit amet ullamcorper urna ipsum ac enim. Aliquam a orci sit amet mi pulvinar tempor. Etiam sit amet aliquet urna. Suspendisse pretium diam non mi placerat, quis elementum massa fringilla. Aliquam sodales scelerisque eros nec lacinia. Praesent tellus arcu, faucibus ac odio in, faucibus fermentum nunc. Quisque turpis neque, accumsan a egestas lobortis, interdum in velit. Donec vel condimentum felis.'
    
    Maecenas sit amet ante sed risus aliquet porttitor et sed mauris. Suspendisse magna sem, tempor id dolor sed, dapibus iaculis lectus. In feugiat odio posuere purus efficitur congue. Suspendisse egestas dolor quis dui finibus rutrum. Fusce ac velit vestibulum, vehicula enim a, faucibus eros. Vivamus quis lorem et tortor interdum cursus et et nunc. Donec facilisis faucibus mi in dignissim. Curabitur blandit a nunc sed blandit. Aliquam rhoncus sapien interdum, lobortis ligula in, lacinia justo. Cras a nisl ac mauris eleifend consectetur vel in tortor. Aliquam vel ultricies ante.
    
    Sed tincidunt ante quis convallis finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, tellus vel pretium volutpat, sem nisi sodales elit, semper sagittis nibh arcu vel lacus. Vivamus pharetra mi lacus, at sagittis ex tristique finibus. Vivamus non risus a nibh tincidunt pretium. Duis semper consectetur nunc, ornare vulputate tellus elementum id. Integer quis iaculis neque. Pellentesque mollis interdum felis nec mollis. Pellentesque at laoreet orci, vitae imperdiet est.
    
    Ut venenatis eleifend justo id laoreet. Integer a purus consectetur, pulvinar leo sit amet, ornare sem. Donec ut vulputate dolor. Fusce efficitur erat aliquet ullamcorper lobortis. Sed feugiat nibh metus, viverra pharetra nibh viverra ut. Quisque hendrerit mauris ac urna condimentum interdum. Donec egestas erat in turpis gravida placerat. Integer placerat lorem consectetur ex vestibulum, nec lobortis purus rutrum. Aenean venenatis turpis tincidunt massa interdum facilisis. Quisque ac ipsum vel augue interdum imperdiet. In vehicula gravida sapien, vitae hendrerit turpis tempor sed. Praesent lobortis velit ex, dictum accumsan felis posuere nec.
    
    Donec tortor ante, vehicula vel tempor nec, sodales vel libero. In commodo ex eget magna congue cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet ligula erat. Aenean quis nisi lectus. Vivamus consectetur urna at sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
    Cras augue quam, finibus a porta sed, aliquam eu enim. Donec suscipit felis in elit consequat viverra. Duis pharetra libero vitae efficitur hendrerit. Sed erat libero, congue eu urna nec, sodales finibus libero. Nam congue convallis sapien interdum aliquam. Nam turpis eros, aliquet id ligula sit amet, elementum vestibulum dui. Nunc eu arcu accumsan, imperdiet dui ac, vulputate quam. Phasellus vitae iaculis risus, sed tincidunt felis.
    
    Maecenas feugiat euismod nisi feugiat consectetur. Sed finibus ex a justo tincidunt, vel auctor lorem sodales. Sed sit amet dui ultrices, finibus lorem non, convallis nisi. Curabitur turpis velit, sagittis in sodales eget, iaculis et purus. Curabitur bibendum sem eros, aliquet tempus quam gravida vitae. Vivamus vitae euismod leo. Proin nulla dolor, sodales vel magna ut, venenatis hendrerit nulla.'
    
    'Nam sed libero lobortis, bibendum lacus sed, imperdiet nulla. Cras faucibus dolor eget urna malesuada, non venenatis lacus lobortis. Maecenas tempus, lorem vitae fringilla posuere, felis risus mattis sapien, non vestibulum est ex non orci. Vivamus ac ante et ipsum facilisis semper. Donec vitae ligula sapien. Suspendisse efficitur magna magna, eu vehicula nisi mollis vel. Aenean ac accumsan purus, at tristique nisl. Duis facilisis, turpis vitae hendrerit elementum, mauris odio tempor quam, sit amet ullamcorper urna ipsum ac enim. Aliquam a orci sit amet mi pulvinar tempor. Etiam sit amet aliquet urna. Suspendisse pretium diam non mi placerat, quis elementum massa fringilla. Aliquam sodales scelerisque eros nec lacinia. Praesent tellus arcu, faucibus ac odio in, faucibus fermentum nunc. Quisque turpis neque, accumsan a egestas lobortis, interdum in velit. Donec vel condimentum felis.'
    
    Maecenas sit amet ante sed risus aliquet porttitor et sed mauris. Suspendisse magna sem, tempor id dolor sed, dapibus iaculis lectus. In feugiat odio posuere purus efficitur congue. Suspendisse egestas dolor quis dui finibus rutrum. Fusce ac velit vestibulum, vehicula enim a, faucibus eros. Vivamus quis lorem et tortor interdum cursus et et nunc. Donec facilisis faucibus mi in dignissim. Curabitur blandit a nunc sed blandit. Aliquam rhoncus sapien interdum, lobortis ligula in, lacinia justo. Cras a nisl ac mauris eleifend consectetur vel in tortor. Aliquam vel ultricies ante.
    
    Sed tincidunt ante quis convallis finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, tellus vel pretium volutpat, sem nisi sodales elit, semper sagittis nibh arcu vel lacus. Vivamus pharetra mi lacus, at sagittis ex tristique finibus. Vivamus non risus a nibh tincidunt pretium. Duis semper consectetur nunc, ornare vulputate tellus elementum id. Integer quis iaculis neque. Pellentesque mollis interdum felis nec mollis. Pellentesque at laoreet orci, vitae imperdiet est.
    
    Ut venenatis eleifend justo id laoreet. Integer a purus consectetur, pulvinar leo sit amet, ornare sem. Donec ut vulputate dolor. Fusce efficitur erat aliquet ullamcorper lobortis. Sed feugiat nibh metus, viverra pharetra nibh viverra ut. Quisque hendrerit mauris ac urna condimentum interdum. Donec egestas erat in turpis gravida placerat. Integer placerat lorem consectetur ex vestibulum, nec lobortis purus rutrum. Aenean venenatis turpis tincidunt massa interdum facilisis. Quisque ac ipsum vel augue interdum imperdiet. In vehicula gravida sapien, vitae hendrerit turpis tempor sed. Praesent lobortis velit ex, dictum accumsan felis posuere nec.
    
    Donec tortor ante, vehicula vel tempor nec, sodales vel libero. In commodo ex eget magna congue cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet ligula erat. Aenean quis nisi lectus. Vivamus consectetur urna at sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
    Cras augue quam, finibus a porta sed, aliquam eu enim. Donec suscipit felis in elit consequat viverra. Duis pharetra libero vitae efficitur hendrerit. Sed erat libero, congue eu urna nec, sodales finibus libero. Nam congue convallis sapien interdum aliquam. Nam turpis eros, aliquet id ligula sit amet, elementum vestibulum dui. Nunc eu arcu accumsan, imperdiet dui ac, vulputate quam. Phasellus vitae iaculis risus, sed tincidunt felis.
    
    Maecenas feugiat euismod nisi feugiat consectetur. Sed finibus ex a justo tincidunt, vel auctor lorem sodales. Sed sit amet dui ultrices, finibus lorem non, convallis nisi. Curabitur turpis velit, sagittis in sodales eget, iaculis et purus. Curabitur bibendum sem eros, aliquet tempus quam gravida vitae. Vivamus vitae euismod leo. Proin nulla dolor, sodales vel magna ut, venenatis hendrerit nulla.'
    'Nam sed libero lobortis, bibendum lacus sed, imperdiet nulla. Cras faucibus dolor eget urna malesuada, non venenatis lacus lobortis. Maecenas tempus, lorem vitae fringilla posuere, felis risus mattis sapien, non vestibulum est ex non orci. Vivamus ac ante et ipsum facilisis semper. Donec vitae ligula sapien. Suspendisse efficitur magna magna, eu vehicula nisi mollis vel. Aenean ac accumsan purus, at tristique nisl. Duis facilisis, turpis vitae hendrerit elementum, mauris odio tempor quam, sit amet ullamcorper urna ipsum ac enim. Aliquam a orci sit amet mi pulvinar tempor. Etiam sit amet aliquet urna. Suspendisse pretium diam non mi placerat, quis elementum massa fringilla. Aliquam sodales scelerisque eros nec lacinia. Praesent tellus arcu, faucibus ac odio in, faucibus fermentum nunc. Quisque turpis neque, accumsan a egestas lobortis, interdum in velit. Donec vel condimentum felis.'
    
    Maecenas sit amet ante sed risus aliquet porttitor et sed mauris. Suspendisse magna sem, tempor id dolor sed, dapibus iaculis lectus. In feugiat odio posuere purus efficitur congue. Suspendisse egestas dolor quis dui finibus rutrum. Fusce ac velit vestibulum, vehicula enim a, faucibus eros. Vivamus quis lorem et tortor interdum cursus et et nunc. Donec facilisis faucibus mi in dignissim. Curabitur blandit a nunc sed blandit. Aliquam rhoncus sapien interdum, lobortis ligula in, lacinia justo. Cras a nisl ac mauris eleifend consectetur vel in tortor. Aliquam vel ultricies ante.
    
    Sed tincidunt ante quis convallis finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, tellus vel pretium volutpat, sem nisi sodales elit, semper sagittis nibh arcu vel lacus. Vivamus pharetra mi lacus, at sagittis ex tristique finibus. Vivamus non risus a nibh tincidunt pretium. Duis semper consectetur nunc, ornare vulputate tellus elementum id. Integer quis iaculis neque. Pellentesque mollis interdum felis nec mollis. Pellentesque at laoreet orci, vitae imperdiet est.
    
    Ut venenatis eleifend justo id laoreet. Integer a purus consectetur, pulvinar leo sit amet, ornare sem. Donec ut vulputate dolor. Fusce efficitur erat aliquet ullamcorper lobortis. Sed feugiat nibh metus, viverra pharetra nibh viverra ut. Quisque hendrerit mauris ac urna condimentum interdum. Donec egestas erat in turpis gravida placerat. Integer placerat lorem consectetur ex vestibulum, nec lobortis purus rutrum. Aenean venenatis turpis tincidunt massa interdum facilisis. Quisque ac ipsum vel augue interdum imperdiet. In vehicula gravida sapien, vitae hendrerit turpis tempor sed. Praesent lobortis velit ex, dictum accumsan felis posuere nec.
    
    Donec tortor ante, vehicula vel tempor nec, sodales vel libero. In commodo ex eget magna congue cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sit amet ligula erat. Aenean quis nisi lectus. Vivamus consectetur urna at sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
    Cras augue quam, finibus a porta sed, aliquam eu enim. Donec suscipit felis in elit consequat viverra. Duis pharetra libero vitae efficitur hendrerit. Sed erat libero, congue eu urna nec, sodales finibus libero. Nam congue convallis sapien interdum aliquam. Nam turpis eros, aliquet id ligula sit amet, elementum vestibulum dui. Nunc eu arcu accumsan, imperdiet dui ac, vulputate quam. Phasellus vitae iaculis risus, sed tincidunt felis.
    
    Maecenas feugiat euismod nisi feugiat consectetur. Sed finibus ex a justo tincidunt, vel auctor lorem sodales. Sed sit amet dui ultrices, finibus lorem non, convallis nisi. Curabitur turpis velit, sagittis in sodales eget, iaculis et purus. Curabitur bibendum sem eros, aliquet tempus quam gravida vitae. Vivamus vitae euismod leo. Proin nulla dolor, sodales vel magna ut, venenatis hendrerit nulla.'

 `
    doc.text(50,40,this.state.value);
    
    var splitTitle = doc.splitTextToSize(text, 400);
doc.text(15, 40, splitTitle);
    // doc.save("test.pdf");
    doc.output('datauri');
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render(){
  return (
    <div className="App">
    hello <br/>
    <form >
        <label>
          name
          <input type="name" className="content"value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    <button onClick={this.pdfMaker}>Download pdf</button>
    </div>
  );
}

}
 
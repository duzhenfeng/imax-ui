/* This file is automatically generated by 'build/build-entry.js' */

import './themes/index.scss';
import Alert from './components/alert';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import CheckBox from './components/check-box';
import Col from './components/col';
import Dropdown from './components/dropdown';
import Icon from './components/icon';
import Input from './components/input';
import Message from './components/message';
import Option from './components/option';
import Radio from './components/radio';
import Row from './components/row';
import Select from './components/select';
import Textarea from './components/textarea';
import Switch from './components/switch';
import Slider from './components/slider';
import Confirm from './components/confirm';
import Table from './components/table';
import Carousel from './components/carousel';
import CarouselItem from './components/carousel-item';

const components = [
  Alert,
  Button,
  ButtonGroup,
  CheckBox,
  Col,
  Dropdown,
  Icon,
  Input,
  Message,
  Option,
  Radio,
  Row,
  Select,
  Textarea,
  Switch,
  Slider,
  Confirm,
  Table,
  Carousel,
  CarouselItem
];

const install = function(Vue) {
  if (install.installed) return;

  components.map(component => {
    Vue.use(component);
  });

  install.installed = true;
};

export default {
  install,
  Alert,
  Button,
  ButtonGroup,
  CheckBox,
  Col,
  Dropdown,
  Icon,
  Input,
  Message,
  Option,
  Radio,
  Row,
  Select,
  Textarea,
  Switch,
  Slider,
  Confirm,
  Table,
  Carousel,
  CarouselItem
};

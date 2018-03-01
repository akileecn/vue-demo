import select from '@/components/form/Select'
import input from '@/components/form/Input'
import radio from '@/components/form/Radio'
import datePicker from '@/components/form/DatePicker'
import citySelect from '@/components/form/CitySelect'
import inputNumber from '@/components/form/InputNumber'
import selectOther from '@/components/form/SelectOther'

export default function install (Vue) {
  Vue.component('c-select', select)
  Vue.component('c-input', input)
  Vue.component('c-radio', radio)
  Vue.component('c-date-picker', datePicker)
  Vue.component('c-city-select', citySelect)
  Vue.component('c-input-number', inputNumber)
  Vue.component('c-select-other', selectOther)
}

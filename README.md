# measure-units-okei

![npm (scoped)](https://img.shields.io/npm/v/@kavi4/measure-units-okei)
![NPM](https://img.shields.io/npm/l/@kavi4/measure-units-okei)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@kavi4/measure-units-okei)
![npm](https://img.shields.io/npm/dm/@kavi4/measure-units-okei)

ОКЕИ — Общероссийский классификатор единиц измерения

Данный пакет содержит словари с группамми единиц измерения согласно классификатору и их карты коэффициентов для перевода единиц измерения с помощью пакета ```@kavi4/measure-units```

Некоторые единицы измерения были намеренно перенесены в группы не по классификатору.
Например, "Брутто-регистровая тонна" была определена классификатором в единицы массы, когда на самом деле это единица обьема и соответствует 2.8316 кубичесим метрам.

# Установка

``` npm i @kavi4/measure-units-okei ```

# Пример использования

```js

import {MeasureUnitConverter,} from '@kavi4/measure-units'
import {Mass} from '@kavi4/measure-units-okei'

let massConverter = new MeasureUnitConverter({
    coefficientMap: new CoefficientMap(Mass.coefficients),
})

let kilograms = massConverter.convert(5000, Mass.units.GRAM, Mass.units.KILOGRAMM)

```

# На данный момент поддерживается

- Масса `Mass`
- Длинна `Length`
- Время `Time`
- Объем `Volume`
- Площадь `Area`

Остальные единицы будут добавляться по мере их востребонности.
Основная часть единиц в классификаторе не разделена, а свалена в несколько больших групп, и их придется в последствии разделять.

import * as React from 'react';
import { Marks } from 'rc-slider';
import { RCTooltip } from 'rc-tooltip';

interface TipFormatter {
    (value: number): React.ReactNode
}

interface RgReactRangeProps {
    /** 
     * Подпись к элементу
     */
    label?: string,
    /** 
     * Класс для корневого DOM элемента. 
     */
    className?: string,
    /** 
     * Определяет вид отображения компонента (slider или range).
     */
    range?: boolean,
    /** 
     * Отображение текстового поля радом с компонентом.
     */
    showSliderTextbox?: boolean,
    /** 
     * Минимальное значение компонента. 
     */
    min?: number,
    /** 
     * Максимальное значение компонента. 
     */
    max?: number,
    /** 
     * Значение компонента по-умолчанию. 
     */
    defaultValue?: number | number[],
    /** 
     * Значение компонента. 
     */
    value?: number | number[],
    /** 
     * Параметр tabIndex. Устанавливается для каждого элемента управления (ползунок). 
     */
    tabIndex?: number | number[],
    /** 
     * Количество интервалов в компоненте. При этом количество элементов управления === `count` + 1. 
     */
    count?: number,
    /** 
     * Позволяет элементам управления принимать одинаковые значения (они могут пересекаться). 
     */
    allowCross?: boolean,
    /** 
     * При перемещении ползунка в направлении к другому оттесняет второй от первого. 
     */
    pushable?: boolean | number,
    /**
     * Mark on the slider. The key determines the position, and the value determines what will show. 
     * If you want to set the style of a specific mark point, the value should be an object which contains `style` and `label` properties.
     */
    marks?: Marks,
    /** 
     * Шаг изменения значения компонента. Значение шага должно быть больше 0 и больше `max - min`. 
     */
    step?: number | null,
    /** 
     * Включает вертикальный режим компонента. 
     */
    vertical?: boolean,
    /** 
     * Функция для кастомизации управляющих элементов (ползунков). 
     */
    handle?(props: Object): React.ReactNode,
    /** 
     * If the value is true, it means a continuous value interval, otherwise, it is a independent value. 
     */
    included?: boolean,
    /** 
     * If true, handles can't be moved. 
     */
    disabled?: boolean,
    /** 
     * Если значение `step` > 1, то включает отображение точек в компоненте. 
     */
    dots?: boolean,
    /** 
     * Кастомизация tooltip. 
     */
    tipFormatter?(value: number): React.ReactNode,
    tipProps?: Partial<RCTooltip.Props>,
    /** 
     * The style used for handle. (both for slider(Object) and range(Array of Object), the array will be used for mutli handle follow element order). 
     */
    handleStyle?: React.CSSProperties[] | React.CSSProperties,
    /** 
     * The style used for track. (both for slider(Object) and range(Array of Object), the array will be used for mutli track follow element order). 
     */
    trackStyle?: React.CSSProperties[] | React.CSSProperties,
    /** 
     * The style used for the track base color. 
     */
    railStyle?: React.CSSProperties,
    /** 
     * The style used for the dots. 
     */
    dotStyle?: React.CSSProperties,
    /** 
     * The style used for the active dots. 
     */
    activeDotStyle?: React.CSSProperties,
    /** 
     * Событие, которые срабатывает после `ontouchstart` или `onmousedown`. 
     */
    onBeforeChange?(value: any): any | undefined
    /** 
     * Событие, которое срабатывает после изменения значения компонента. 
     */
    onChange?(value: any): any | undefined
    /**
     * Событие, которые срабатывает после `ontouchend` или `onmouseup`. 
     */
    onAfterChange?(value: any): any | undefined
}

export class RgReactRange extends React.Component<RgReactRangeProps, any> { }
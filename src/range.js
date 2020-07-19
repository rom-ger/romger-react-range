import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FlexBox } from '@romger/react-flex-layout';
import classnames from 'classnames';
import { RgReactInput } from '@romger/react-input';
import './index.css';

class RgReactRange extends React.Component {
    constructor(params) {
        super(params);

        this.state = {
            textboxValue: null
        };
    }

    componentWillMount() {
        this.setState({ textboxValue: this.props.value });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ textboxValue: nextProps.value });
    }

    /**
     * Хэндлер события изменения текстового поля
     */
    onTextboxValueChanged() {
        let textboxValue = this.state.textboxValue;

        if (textboxValue === null || textboxValue === undefined || isNaN(textboxValue)) {
            return this.props.onChange ?
                this.props.onChange(null) :
                null;
        }

        if (this.props.onChange) {
            let newValue = parseFloat(textboxValue);
            newValue = this.props.min && newValue < this.props.min ?
                this.props.min :
                newValue;
            newValue = this.props.max && newValue > this.props.max ?
                this.props.max :
                newValue;
            this.props.onChange(newValue);
        }
    }

    render() {
        return (
            <FlexBox
                className={classnames(
                    'rg-react-range'
                )}
                flex={true}
                row='space-between end'>
                <FlexBox
                    column="start stretch"
                    flex={true}>
                    {
                        !!this.props.label &&
                        <div
                            className={classnames(
                                'rg-react-range__label'
                            )}
                        >
                            {this.props.label}
                        </div>
                    }
                    {
                        this.props.range ?
                            <Range
                                className={this.props.className}
                                min={this.props.min}
                                max={this.props.max}
                                defaultValue={this.props.defaultValue}
                                value={!isNaN(this.props.value) ? this.props.value : this.props.min}
                                tabIndex={this.props.tabIndex}
                                count={this.props.count}
                                allowCross={this.props.allowCross}
                                pushable={this.props.pushable}
                                marks={this.props.marks}
                                step={this.props.step}
                                vertical={this.props.vertical}
                                handle={this.props.handle}
                                included={this.props.included}
                                disabled={this.props.disabled}
                                dots={this.props.dots}
                                tipFormatter={this.props.tipFormatter}
                                tipProps={this.props.tipProps}
                                handleStyle={this.props.handleStyle}
                                trackStyle={this.props.trackStyle}
                                railStyle={this.props.railStyle}
                                dotStyle={this.props.dotStyle}
                                activeDotStyle={this.props.activeDotStyle}
                                onBeforeChange={this.props.onBeforeChange}
                                onChange={this.props.onChange}
                                onAfterChange={this.props.onAfterChange}
                            /> :
                            <Slider
                                className={this.props.className}
                                min={this.props.min}
                                max={this.props.max}
                                defaultValue={this.props.defaultValue}
                                value={!isNaN(this.props.value) ? this.props.value : this.props.min}
                                tabIndex={this.props.tabIndex}
                                marks={this.props.marks}
                                step={this.props.step}
                                vertical={this.props.vertical}
                                handle={this.props.handle}
                                included={this.props.included}
                                disabled={this.props.disabled}
                                dots={this.props.dots}
                                tipFormatter={this.props.tipFormatter}
                                tipProps={this.props.tipProps}
                                handleStyle={this.props.handleStyle}
                                trackStyle={this.props.trackStyle}
                                railStyle={this.props.railStyle}
                                dotStyle={this.props.dotStyle}
                                activeDotStyle={this.props.activeDotStyle}
                                onBeforeChange={this.props.onBeforeChange}
                                onChange={this.props.onChange}
                                onAfterChange={this.props.onAfterChange} />
                    }
                </FlexBox>
                {
                    !this.props.range &&
                    this.props.showSliderTextbox &&
                    <div className={classnames(
                        'rg-react-range__slider-textbox'
                    )}>
                        <RgReactInput
                            value={!isNaN(this.state.textboxValue) && this.state.textboxValue !== null ? this.state.textboxValue.toString() : ''}
                            disabled={this.props.disabled}
                            placeholder=''
                            updateCallback={(e) => this.setState({ textboxValue: e.target.value }, () => this.onTextboxValueChanged())} />
                    </div>
                }
            </FlexBox>
        );
    }
}

export default RgReactRange;

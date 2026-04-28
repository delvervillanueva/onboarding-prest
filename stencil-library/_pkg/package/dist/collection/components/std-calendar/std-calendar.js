import { h } from "@stencil/core";
import localeEs from "./air-datepicker/locale/es";
import AirDatepicker from "./air-datepicker/air-datepicker";
import { daysBetween } from "../../utils/utils";
export class StdCalendar {
    constructor() {
        this.minDate = null;
        this.maxDate = null;
        this.buttonLabelOk = 'Aplicar';
        this.buttonLabelClear = 'Limpiar';
        this.range = true;
        this.showCalendar = false;
        this.startDate = null;
        this.endDate = null;
        this.selectedDates = '';
        // for input
        this.disabledAsReadonly = false;
        this.status = 'default';
        this.placeholder = 'Seleccione un rango';
        this.label = 'Rango de fechas';
        this.isPositionAbsolute = true;
        this.classesContainer = '';
        this.airDatepickerInstance = null;
    }
    componentDidLoad() {
        if (this.airDatepickerInstance)
            return;
        this.initCalendar();
    }
    async reset() {
        this.setCalendarInstance([]);
        this.clearStateVariables();
        this.onChangeCalendar([]);
        this.airDatepickerInstance.setViewDate(new Date());
    }
    async onSelected() {
        const dates = !this.range ? this.formatDate(this.startDate) : [this.formatDate(this.startDate), this.formatDate(this.endDate)];
        this.onChangeCalendar(dates);
    }
    async setRange(startDate, endDate) {
        if (!startDate || !endDate) {
            return;
        }
        this.setCalendarInstance([this.startDate, this.endDate]);
        this.setStateVariables(startDate, endDate);
    }
    async setDate(date) {
        if (!date)
            return;
        this.startDate = this.parseStringToDate(date);
        this.setCalendarInstance([this.startDate]);
        this.selectedDates = this.formatDate(this.startDate, true);
    }
    setCalendarInstance(dates) {
        this.airDatepickerInstance.clear();
        this.airDatepickerInstance.update({
            selectedDates: [...dates]
        });
    }
    //emitters
    onChangeCalendar(value) {
        this.changeCalendar.emit(value);
    }
    onSelectBlur() {
        this.blurEvent.emit();
    }
    // state variables
    clearStateVariables() {
        this.startDate = null;
        this.endDate = null;
        this.selectedDates = '';
    }
    setStateVariables(startDate, endDate) {
        this.startDate = this.parseStringToDate(startDate);
        this.endDate = this.parseStringToDate(endDate);
        this.selectedDates = `${this.formatDate(this.startDate, true)} - ${this.formatDate(this.endDate, true)}`;
    }
    // utils
    formatDate(date, withSlash) {
        if (!date)
            return null;
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return withSlash ? `${day}/${month}/${year}` : `${year}-${month}-${day}`;
    }
    parseStringToDate(stringDate, separator = '-') {
        const [year, month, day] = stringDate.split(separator);
        return new Date(+year, +month - 1, +day); // month is 0-indexed in JavaScript Date
    }
    toggleCollapse() {
        if (this.readonly || this.disabled)
            return;
        this.showCalendar = !this.showCalendar;
        if (!this.showCalendar) {
            this.airDatepickerInstance.hide();
        }
    }
    async initCalendar() {
        var _a, _b;
        this.airDatepickerInstance = new AirDatepicker(this.calendarMenu, {
            buttons: [
                {
                    content: this.buttonLabelClear,
                    onClick: () => this.reset()
                },
                {
                    content: this.buttonLabelOk,
                    className: 'air-datepicker-button--apply',
                    onClick: picker => {
                        picker.hide();
                        this.showCalendar = false;
                    }
                }
            ],
            classes: 'css-calendar',
            locale: localeEs,
            multipleDatesSeparator: ' - ',
            position: 'bottom right',
            dateFormat: 'dd/MM/yyyy',
            range: this.range,
            dynamicRange: false,
            minDate: (_a = this.minDate) !== null && _a !== void 0 ? _a : undefined,
            maxDate: (_b = this.maxDate) !== null && _b !== void 0 ? _b : undefined,
            disableNavWhenOutOfRange: true,
            onHide: isFinished => {
                if (!this.range)
                    return;
                this.endDate ? this.onSelected() : !isFinished ? this.reset() : null;
            },
            onSelect: opts => {
                const { date, formattedDate } = opts;
                // if (!date) return;
                const newFormattedDate = Array.isArray(formattedDate) ? formattedDate : [formattedDate];
                this.selectedDates = newFormattedDate.join(' - ');
                this.startDate = this.range ? date[0] : date;
                this.endDate = this.range ? (Array.of(date).length > 0 ? date[1] : null) : null;
                if (!this.range) {
                    this.onSelected();
                }
                // if (formattedDate.length === 0) return this.reset();
            },
            onBeforeSelect: ({ date, datepicker }) => {
                if (!this.maxRangeDays) {
                    return true;
                }
                const isRange = datepicker.selectedDates.length == 1;
                const rangeDays = this.startDate && daysBetween(date, this.startDate);
                const isValidRange = rangeDays < this.maxRangeDays;
                isRange && !isValidRange && this.invalidRange.emit();
                return !isRange || isValidRange;
            }
        });
    }
    checkForClickOutside(ev) {
        const path = ev.composedPath();
        if (this.showCalendar && !path.includes(this.inputElement) && !path.includes(this.calendarMenu)) {
            this.onSelectBlur();
            this.showCalendar = false;
            this.airDatepickerInstance.hide();
            return;
        }
    }
    render() {
        const containerClasses = ['mt-[10px]  z-50 w-full', this.isPositionAbsolute ? 'absolute' : 'relative', this.classesContainer].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: 'f81106bc766d067ecb101500ee957515e5a6bb18', class: "flex flex-col gap-1 relative" }, h("div", { key: 'c3ef060caaa9675aa67afc742d4df2fe77efcd1e', class: "relative" }, h("std-input", { key: '7ef52654568dc52b9dc95894804123b0a1c1fe74', onKeyDown: e => e.preventDefault(), ref: el => (this.inputElement = el), placeholder: this.placeholder, label: this.label, onClick: () => this.toggleCollapse(), value: this.selectedDates, disabled: this.disabled, readonly: this.readonly, helperText: this.helperText, status: this.status, disabledAsReadonly: this.disabledAsReadonly, icon: "calendar", iconClass: "cursor-pointer" }), h("div", { key: 'd1e0f0d069de9f9a32d074f6744827dc72897ded', ref: el => (this.calendarMenu = el), id: "calendarId", class: this.showCalendar ? containerClasses : 'hidden' }))));
    }
    static get is() { return "std-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-calendar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-calendar.css"]
        };
    }
    static get properties() {
        return {
            "minDate": {
                "type": "any",
                "attribute": "min-date",
                "mutable": false,
                "complexType": {
                    "original": "Date | string | number",
                    "resolved": "Date | number | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "maxDate": {
                "type": "any",
                "attribute": "max-date",
                "mutable": false,
                "complexType": {
                    "original": "Date | string | number",
                    "resolved": "Date | number | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "maxRangeDays": {
                "type": "number",
                "attribute": "max-range-days",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "buttonLabelOk": {
                "type": "string",
                "attribute": "button-label-ok",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Aplicar'"
            },
            "buttonLabelClear": {
                "type": "string",
                "attribute": "button-label-clear",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Limpiar'"
            },
            "range": {
                "type": "boolean",
                "attribute": "range",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "disabledAsReadonly": {
                "type": "boolean",
                "attribute": "disabled-as-readonly",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "status": {
                "type": "string",
                "attribute": "status",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Seleccione un rango'"
            },
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Rango de fechas'"
            },
            "isPositionAbsolute": {
                "type": "boolean",
                "attribute": "is-position-absolute",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "classesContainer": {
                "type": "string",
                "attribute": "classes-container",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "showCalendar": {},
            "startDate": {},
            "endDate": {},
            "selectedDates": {}
        };
    }
    static get events() {
        return [{
                "method": "changeCalendar",
                "name": "changeCalendar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "blurEvent",
                "name": "blurEvent",
                "bubbles": false,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "invalidRange",
                "name": "invalidRange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "reset": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "onSelected": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setRange": {
                "complexType": {
                    "signature": "(startDate: string, endDate: string) => Promise<void>",
                    "parameters": [{
                            "name": "startDate",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "endDate",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setDate": {
                "complexType": {
                    "signature": "(date: string) => Promise<void>",
                    "parameters": [{
                            "name": "date",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "checkForClickOutside",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=std-calendar.js.map

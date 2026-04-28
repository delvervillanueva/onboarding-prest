import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { d as daysBetween } from './p-BAe8ir6j.js';
import { d as defineCustomElement$5 } from './p-C_3xqLHk.js';
import { d as defineCustomElement$4 } from './p-qCmH937v.js';
import { d as defineCustomElement$3 } from './p-C-Sf9QM2.js';
import { d as defineCustomElement$2 } from './p-DYKUepBi.js';

const es = {
    days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    daysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    today: 'Hoy',
    clear: 'Limpiar',
    dateFormat: 'dd/MM/yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 1
};

const AirDatepicker = function () {
  return (function () {
    var e = {
        d: function (t, i) {
          for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, { enumerable: true, get: i[s] });
        },
        o: function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
      },
      t = {};
    e.d(t, {
      default: function () {
        return R;
      }
    });
    var i = {
        days: 'days',
        months: 'months',
        years: 'years',
        day: 'day',
        month: 'month',
        year: 'year',
        eventChangeViewDate: 'changeViewDate',
        eventChangeCurrentView: 'changeCurrentView',
        eventChangeFocusDate: 'changeFocusDate',
        eventChangeSelectedDate: 'changeSelectedDate',
        eventChangeTime: 'changeTime',
        eventChangeLastSelectedDate: 'changeLastSelectedDate',
        actionSelectDate: 'selectDate',
        actionUnselectDate: 'unselectDate',
        cssClassWeekend: '-weekend-'
      },
      s = {
        classes: '',
        inline: false,
        locale: {
          days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
          daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
          daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
          months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
          today: 'Сегодня',
          clear: 'Очистить',
          dateFormat: 'dd.MM.yyyy',
          timeFormat: 'HH:mm',
          firstDay: 1
        },
        startDate: new Date(),
        firstDay: '',
        weekends: [6, 0],
        dateFormat: '',
        altField: '',
        altFieldDateFormat: 'T',
        toggleSelected: true,
        keyboardNav: true,
        selectedDates: false,
        container: '',
        isMobile: false,
        visible: false,
        position: 'bottom left',
        offset: 12,
        view: i.days,
        minView: i.days,
        showOtherMonths: true,
        selectOtherMonths: true,
        moveToOtherMonthsOnSelect: true,
        showOtherYears: true,
        selectOtherYears: true,
        moveToOtherYearsOnSelect: true,
        minDate: '',
        maxDate: '',
        disableNavWhenOutOfRange: true,
        multipleDates: false,
        multipleDatesSeparator: ', ',
        range: false,
        dynamicRange: true,
        buttons: false,
        monthsField: 'monthsShort',
        showEvent: 'focus',
        autoClose: false,
        fixedHeight: false,
        prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
        nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
        navTitles: {
          days: 'MMMM,&nbsp;<span>yyyy</span>',
          months: 'yyyy',
          years: 'yyyy1 - yyyy2'
        },
        timepicker: false,
        onlyTimepicker: false,
        dateTimeSeparator: ' ',
        timeFormat: '',
        minHours: 0,
        maxHours: 24,
        minMinutes: 0,
        maxMinutes: 59,
        hoursStep: 1,
        minutesStep: 1,
        onSelect: false,
        onChangeViewDate: false,
        onChangeView: false,
        onRenderCell: false,
        onShow: false,
        onHide: false,
        onClickDayName: false
      };
    function a(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      return 'string' == typeof e ? t.querySelector(e) : e;
    }
    function n() {
      let { tagName: e = 'div', className: t = '', innerHtml: i = '', id: s = '', attrs: a = {} } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = document.createElement(e);
      return t && n.classList.add(...t.split(' ')), s && (n.id = s), i && (n.innerHTML = i), a && r(n, a), n;
    }
    function r(e, t) {
      for (let [i, s] of Object.entries(t)) void 0 !== s && e.setAttribute(i, s);
      return e;
    }
    function o(e) {
      return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    }
    function h(e) {
      let t = e.getHours(),
        { hours: i, dayPeriod: s } = l(t);
      return {
        year: e.getFullYear(),
        month: e.getMonth(),
        fullMonth: e.getMonth() + 1 < 10 ? '0' + (e.getMonth() + 1) : e.getMonth() + 1,
        date: e.getDate(),
        fullDate: e.getDate() < 10 ? '0' + e.getDate() : e.getDate(),
        day: e.getDay(),
        hours: t,
        fullHours: d(t),
        hours12: i,
        dayPeriod: s,
        fullHours12: d(i),
        minutes: e.getMinutes(),
        fullMinutes: e.getMinutes() < 10 ? '0' + e.getMinutes() : e.getMinutes()
      };
    }
    function l(e) {
      return {
        dayPeriod: e > 11 ? 'pm' : 'am',
        hours: e % 12 == 0 ? 12 : e % 12
      };
    }
    function d(e) {
      return e < 10 ? '0' + e : e;
    }
    function c(e) {
      let t = 10 * Math.floor(e.getFullYear() / 10);
      return [t, t + 9];
    }
    function u() {
      let e = [];
      for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
      return (
        i.forEach(t => {
          if ('object' == typeof t) for (let i in t) t[i] && e.push(i);
          else t && e.push(t);
        }),
        e.join(' ')
      );
    }
    function p(e, t) {
      let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
      if (!e || !t) return false;
      let a = h(e),
        n = h(t);
      return {
        [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
        [i.months]: a.month === n.month && a.year === n.year,
        [i.years]: a.year === n.year
      }[s];
    }
    function m(e, t, i) {
      let s = g(e, false).getTime(),
        a = g(t, false).getTime();
      return i ? s >= a : s > a;
    }
    function v(e, t) {
      return !m(e, t, true);
    }
    function g(e) {
      let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        i = new Date(e.getTime());
      return (
        'boolean' != typeof t ||
          t ||
          (function (e) {
            e.setHours(0, 0, 0, 0);
          })(i),
        i
      );
    }
    function D(e, t, i) {
      e.length
        ? e.forEach(e => {
            e.addEventListener(t, i);
          })
        : e.addEventListener(t, i);
    }
    function y(e, t) {
      return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
    }
    function f(e, t, i) {
      return e > i ? i : e < t ? t : e;
    }
    function w(e) {
      for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
      return (
        i
          .filter(e => e)
          .forEach(t => {
            for (let [i, s] of Object.entries(t))
              if (void 0 !== s && '[object Object]' === s.toString()) {
                let t = void 0 !== e[i] ? e[i].toString() : void 0,
                  a = s.toString(),
                  n = Array.isArray(s) ? [] : {};
                (e[i] = e[i] ? (t !== a ? n : e[i]) : n), w(e[i], s);
              } else e[i] = s;
          }),
        e
      );
    }
    function b(e) {
      let t = e;
      return (
        e instanceof Date || ('string' == typeof e && /^\d{4}-\d{2}-\d{2}$/.test(e) && (e += 'T00:00:00'), (t = new Date(e))),
        isNaN(t.getTime()) && (console.log(`Unable to convert value "${e}" to Date object`), (t = false)),
        t
      );
    }
    function k(e) {
      let t = '\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;';
      return new RegExp('(^|>|' + t + ')(' + e + ')($|<|' + t + ')', 'g');
    }
    function $(e, t, i) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ('object' != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, 'string');
              if ('object' != typeof s) return s;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            })
          : (e[t] = i),
        e
      );
    }
    class C {
      constructor() {
        let { type: e, date: t, dp: i, opts: s, body: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        $(this, 'focus', () => {
          this.$cell.classList.add('-focus-'), (this.focused = true);
        }),
          $(this, 'removeFocus', () => {
            this.$cell.classList.remove('-focus-'), (this.focused = false);
          }),
          $(this, 'select', () => {
            this.$cell.classList.add('-selected-'), (this.selected = true);
          }),
          $(this, 'removeSelect', () => {
            this.$cell.classList.remove('-selected-', '-range-from-', '-range-to-'), (this.selected = false);
          }),
          $(this, 'onChangeSelectedDate', () => {
            this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
          }),
          $(this, 'onChangeFocusDate', e => {
            if (!e) return void (this.focused && this.removeFocus());
            let t = p(e, this.date, this.type);
            t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
          }),
          $(this, 'render', () => ((this.$cell.innerHTML = this._getHtml()), this._handleClasses(), this.$cell)),
          (this.type = e),
          (this.singleType = this.type.slice(0, -1)),
          (this.date = t),
          (this.dp = i),
          (this.opts = s),
          (this.body = a),
          (this.customData = false),
          this.init();
      }
      init() {
        var e;
        let { onRenderCell: t } = this.opts;
        t &&
          (this.customData = t({
            date: this.date,
            cellType: this.singleType,
            datepicker: this.dp
          })),
          this._createElement(),
          this._bindDatepickerEvents(),
          null !== (e = this.customData) && void 0 !== e && e.disabled && this.dp.disableDate(this.date);
      }
      _bindDatepickerEvents() {
        this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
      }
      unbindDatepickerEvents() {
        this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
      }
      _createElement() {
        var e;
        let { year: t, month: i, date: s } = h(this.date),
          a = (null === (e = this.customData) || void 0 === e ? void 0 : e.attrs) || {};
        (this.$cell = n({
          attrs: { 'data-year': t, 'data-month': i, 'data-date': s, ...a }
        })),
          (this.$cell.adpCell = this);
      }
      _getClassName() {
        var e;
        let t = new Date(),
          { selectOtherMonths: s, selectOtherYears: a } = this.opts,
          { minDate: n, maxDate: r, isDateDisabled: o } = this.dp,
          { day: l } = h(this.date),
          d = this._isOutOfMinMaxRange(),
          c = o(this.date),
          m = u('air-datepicker-cell', `-${this.singleType}-`, {
            '-current-': p(t, this.date, this.type),
            '-min-date-': n && p(n, this.date, this.type),
            '-max-date-': r && p(r, this.date, this.type)
          }),
          v = '';
        switch (this.type) {
          case i.days:
            v = u({
              '-weekend-': this.dp.isWeekend(l),
              '-other-month-': this.isOtherMonth,
              '-disabled-': (this.isOtherMonth && !s) || d || c
            });
            break;
          case i.months:
            v = u({ '-disabled-': d });
            break;
          case i.years:
            v = u({
              '-other-decade-': this.isOtherDecade,
              '-disabled-': d || (this.isOtherDecade && !a)
            });
        }
        return u(m, v, null === (e = this.customData) || void 0 === e ? void 0 : e.classes).split(' ');
      }
      _getHtml() {
        var e;
        let { year: t, month: s, date: a } = h(this.date),
          { showOtherMonths: n, showOtherYears: r } = this.opts;
        if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
        switch (this.type) {
          case i.days:
            return !n && this.isOtherMonth ? '' : a;
          case i.months:
            return this.dp.locale[this.opts.monthsField][s];
          case i.years:
            return !r && this.isOtherDecade ? '' : t;
        }
      }
      _isOutOfMinMaxRange() {
        let { minDate: e, maxDate: t } = this.dp,
          { type: s, date: a } = this,
          { month: n, year: r, date: o } = h(a),
          l = s === i.days,
          d = s === i.years,
          c = !!e && new Date(r, d ? e.getMonth() : n, l ? o : e.getDate()),
          u = !!t && new Date(r, d ? t.getMonth() : n, l ? o : t.getDate());
        return e && t ? v(c, e) || m(u, t) : e ? v(c, e) : t ? m(u, t) : void 0;
      }
      destroy() {
        this.unbindDatepickerEvents();
      }
      _handleRangeStatus() {
        const { selectedDates: e, focusDate: t, rangeDateTo: i, rangeDateFrom: s } = this.dp,
          a = e.length;
        if (!a) return;
        let n = s,
          r = i;
        if (1 === a && t) {
          const i = m(t, e[0]);
          (n = i ? e[0] : t), (r = i ? t : e[0]);
        }
        let o = u({
          '-in-range-': n && r && ((h = this.date), (l = n), (d = r), m(h, l) && v(h, d)),
          '-range-from-': n && p(this.date, n, this.type),
          '-range-to-': r && p(this.date, r, this.type)
        });
        var h, l, d;
        this.$cell.classList.remove('-range-from-', '-range-to-', '-in-range-'), o && this.$cell.classList.add(...o.split(' '));
      }
      _handleSelectedStatus() {
        let e = this.dp._checkIfDateIsSelected(this.date, this.type);
        e ? this.select() : !e && this.selected && this.removeSelect();
      }
      _handleInitialFocusStatus() {
        p(this.dp.focusDate, this.date, this.type) && this.focus();
      }
      _handleClasses() {
        this.$cell.setAttribute('class', ''),
          this._handleInitialFocusStatus(),
          this.dp.hasSelectedDates && (this._handleSelectedStatus(), this.dp.opts.range && this._handleRangeStatus()),
          this.$cell.classList.add(...this._getClassName());
      }
      get isDisabled() {
        return this.$cell.matches('.-disabled-');
      }
      get isOtherMonth() {
        return this.dp.isOtherMonth(this.date);
      }
      get isOtherDecade() {
        return this.dp.isOtherDecade(this.date);
      }
    }
    function _(e, t, i) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ('object' != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, 'string');
              if ('object' != typeof s) return s;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            })
          : (e[t] = i),
        e
      );
    }
    let M = {
      [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,
      [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`,
      [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>`
    };
    const S = '.air-datepicker-cell';
    class T {
      constructor(e) {
        let { dp: t, type: s, opts: a } = e;
        _(this, 'handleClick', e => {
          let t = e.target.closest(S).adpCell;
          if (t.isDisabled) return;
          if (!this.dp.isMinViewReached) return void this.dp.down();
          let i = this.dp._checkIfDateIsSelected(t.date, t.type);
          i ? this.dp._handleAlreadySelectedDates(i, t.date) : this.dp.selectDate(t.date);
        }),
          _(this, 'handleDayNameClick', e => {
            let t = e.target.getAttribute('data-day-index');
            this.opts.onClickDayName({
              dayIndex: Number(t),
              datepicker: this.dp
            });
          }),
          _(this, 'onChangeCurrentView', e => {
            e !== this.type ? this.hide() : (this.show(), this.render());
          }),
          _(this, 'onMouseOverCell', e => {
            let t = y(e.target, S);
            this.dp.setFocusDate(!!t && t.adpCell.date);
          }),
          _(this, 'onMouseOutCell', () => {
            this.dp.setFocusDate(false);
          }),
          _(this, 'onClickBody', e => {
            let { onClickDayName: t } = this.opts,
              i = e.target;
            i.closest(S) && this.handleClick(e), t && i.closest('.air-datepicker-body--day-name') && this.handleDayNameClick(e);
          }),
          _(this, 'onMouseDown', e => {
            this.pressed = true;
            let t = y(e.target, S),
              i = t && t.adpCell;
            p(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = true), p(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = true);
          }),
          _(this, 'onMouseMove', e => {
            if (!this.pressed || !this.dp.isMinViewReached) return;
            e.preventDefault();
            let t = y(e.target, S),
              i = t && t.adpCell,
              { selectedDates: s, rangeDateTo: a, rangeDateFrom: n } = this.dp;
            if (!i || i.isDisabled) return;
            let { date: r } = i;
            if (2 === s.length) {
              if (this.rangeFromFocused && !m(r, a)) {
                let { hours: e, minutes: t } = h(n);
                r.setHours(e), r.setMinutes(t), (this.dp.rangeDateFrom = r), this.dp.replaceDate(n, r);
              }
              if (this.rangeToFocused && !v(r, n)) {
                let { hours: e, minutes: t } = h(a);
                r.setHours(e), r.setMinutes(t), (this.dp.rangeDateTo = r), this.dp.replaceDate(a, r);
              }
            }
          }),
          _(this, 'onMouseUp', () => {
            (this.pressed = false), (this.rangeFromFocused = false), (this.rangeToFocused = false);
          }),
          _(this, 'onChangeViewDate', (e, t) => {
            if (!this.isVisible) return;
            let s = c(e),
              a = c(t);
            switch (this.dp.currentView) {
              case i.days:
                if (p(e, t, i.months)) return;
                break;
              case i.months:
                if (p(e, t, i.years)) return;
                break;
              case i.years:
                if (s[0] === a[0] && s[1] === a[1]) return;
            }
            this.render();
          }),
          _(this, 'render', () => {
            this.destroyCells(),
              this._generateCells(),
              this.cells.forEach(e => {
                this.$cells.appendChild(e.render());
              });
          }),
          (this.dp = t),
          (this.type = s),
          (this.opts = a),
          (this.cells = []),
          (this.$el = ''),
          (this.pressed = false),
          (this.isVisible = true),
          this.init();
      }
      init() {
        this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
      }
      _bindEvents() {
        let { range: e, dynamicRange: t } = this.opts;
        D(this.$el, 'mouseover', this.onMouseOverCell),
          D(this.$el, 'mouseout', this.onMouseOutCell),
          D(this.$el, 'click', this.onClickBody),
          e && t && (D(this.$el, 'mousedown', this.onMouseDown), D(this.$el, 'mousemove', this.onMouseMove), D(window.document, 'mouseup', this.onMouseUp));
      }
      _bindDatepickerEvents() {
        this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
      }
      _buildBaseHtml() {
        (this.$el = n({
          className: `air-datepicker-body -${this.type}-`,
          innerHtml: M[this.type]
        })),
          (this.$names = a('.air-datepicker-body--day-names', this.$el)),
          (this.$cells = a('.air-datepicker-body--cells', this.$el));
      }
      _getDayNamesHtml() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay,
          t = '',
          s = this.dp.isWeekend,
          { onClickDayName: a } = this.opts,
          n = e,
          r = 0;
        for (; r < 7; ) {
          let e = n % 7;
          (t += `<div class="${u('air-datepicker-body--day-name', { [i.cssClassWeekend]: s(e), '-clickable-': !!a })}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`),
            r++,
            n++;
        }
        return t;
      }
      renderDayNames() {
        this.$names.innerHTML = this._getDayNamesHtml();
      }
      _generateCell(e) {
        let { type: t, dp: i, opts: s } = this;
        return new C({ type: t, dp: i, opts: s, date: e, body: this });
      }
      _generateCells() {
        T.getDatesFunction(this.type)(this.dp, e => {
          this.cells.push(this._generateCell(e));
        });
      }
      show() {
        (this.isVisible = true), this.$el.classList.remove('-hidden-');
      }
      hide() {
        (this.isVisible = false), this.$el.classList.add('-hidden-');
      }
      destroyCells() {
        this.cells.forEach(e => e.destroy()), (this.cells = []), (this.$cells.innerHTML = '');
      }
      destroy() {
        this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
      }
      static getDaysDates(e, t) {
        let {
            viewDate: i,
            opts: { fixedHeight: s },
            locale: { firstDay: a }
          } = e,
          n = o(i),
          { year: r, month: l } = h(i),
          d = new Date(r, l, 1),
          c = new Date(r, l, n),
          u = d.getDay() - a,
          p = 6 - c.getDay() + a;
        (u = u < 0 ? u + 7 : u), (p = p > 6 ? p - 7 : p);
        let m = (function (e, t) {
            let { year: i, month: s, date: a } = h(e);
            return new Date(i, s, a - t);
          })(d, u),
          v = n + u + p,
          g = m.getDate(),
          { year: D, month: y } = h(m),
          f = 0;
        s && (v = 42);
        const w = [];
        for (; f < v; ) {
          let e = new Date(D, y, g + f);
          t && t(e), w.push(e), f++;
        }
        return w;
      }
      static getMonthsDates(e, t) {
        let { year: i } = e.parsedViewDate,
          s = 0,
          a = [];
        for (; s < 12; ) {
          const e = new Date(i, s);
          a.push(e), t && t(e), s++;
        }
        return a;
      }
      static getYearsDates(e, t) {
        let i = c(e.viewDate),
          s = i[0] - 1,
          a = i[1] + 1,
          n = s,
          r = [];
        for (; n <= a; ) {
          const e = new Date(n, 0);
          r.push(e), t && t(e), n++;
        }
        return r;
      }
      static getDatesFunction() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
        return {
          [i.days]: T.getDaysDates,
          [i.months]: T.getMonthsDates,
          [i.years]: T.getYearsDates
        }[e];
      }
    }
    function F(e, t, i) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ('object' != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, 'string');
              if ('object' != typeof s) return s;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            })
          : (e[t] = i),
        e
      );
    }
    class V {
      constructor(e) {
        let { dp: t, opts: i } = e;
        F(this, 'onClickNav', e => {
          let t = y(e.target, '.air-datepicker-nav--action');
          if (!t) return;
          let i = t.dataset.action;
          this.dp[i]();
        }),
          F(this, 'onChangeViewDate', () => {
            this.render(), this._resetNavStatus(), this.handleNavStatus();
          }),
          F(this, 'onChangeCurrentView', () => {
            this.render(), this._resetNavStatus(), this.handleNavStatus();
          }),
          F(this, 'onClickNavTitle', () => {
            this.dp.isFinalView || this.dp.up();
          }),
          F(this, 'update', () => {
            let { prevHtml: e, nextHtml: t } = this.opts;
            (this.$prev.innerHTML = e), (this.$next.innerHTML = t), this._resetNavStatus(), this.render(), this.handleNavStatus();
          }),
          F(this, 'renderDelay', () => {
            setTimeout(this.render);
          }),
          F(this, 'render', () => {
            (this.$title.innerHTML = this._getTitle()),
              (function (e, t) {
                for (let i in t) t[i] ? e.classList.add(i) : e.classList.remove(i);
              })(this.$title, { '-disabled-': this.dp.isFinalView });
          }),
          (this.dp = t),
          (this.opts = i),
          this.init();
      }
      init() {
        this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
      }
      _defineDOM() {
        (this.$title = a('.air-datepicker-nav--title', this.$el)), (this.$prev = a('[data-action="prev"]', this.$el)), (this.$next = a('[data-action="next"]', this.$el));
      }
      _bindEvents() {
        this.$el.addEventListener('click', this.onClickNav), this.$title.addEventListener('click', this.onClickNavTitle);
      }
      _bindDatepickerEvents() {
        this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
          this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView),
          this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
      }
      destroy() {
        this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
          this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView),
          this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
      }
      _createElement() {
        this.$el = n({ tagName: 'nav', className: 'air-datepicker-nav' });
      }
      _getTitle() {
        let { dp: e, opts: t } = this,
          i = t.navTitles[e.currentView];
        return 'function' == typeof i ? i(e) : e.formatDate(e.viewDate, i);
      }
      handleNavStatus() {
        let { disableNavWhenOutOfRange: e } = this.opts,
          { minDate: t, maxDate: s } = this.dp;
        if ((!t && !s) || !e) return;
        let { year: a, month: n } = this.dp.parsedViewDate,
          r = !!t && h(t),
          o = !!s && h(s);
        switch (this.dp.currentView) {
          case i.days:
            t && r.month >= n && r.year >= a && this._disableNav('prev'), s && o.month <= n && o.year <= a && this._disableNav('next');
            break;
          case i.months:
            t && r.year >= a && this._disableNav('prev'), s && o.year <= a && this._disableNav('next');
            break;
          case i.years: {
            let e = c(this.dp.viewDate);
            t && r.year >= e[0] && this._disableNav('prev'), s && o.year <= e[1] && this._disableNav('next');
            break;
          }
        }
      }
      _disableNav(e) {
        a('[data-action="' + e + '"]', this.$el).classList.add('-disabled-');
      }
      _resetNavStatus() {
        !(function (e) {
          for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
          e.length
            ? e.forEach(e => {
                e.classList.remove(...i);
              })
            : e.classList.remove(...i);
        })(this.$el.querySelectorAll('.air-datepicker-nav--action'), '-disabled-');
      }
      _buildBaseHtml() {
        let { prevHtml: e, nextHtml: t } = this.opts;
        this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`;
      }
      get isNavIsFunction() {
        let { navTitles: e } = this.opts;
        return Object.keys(e).find(t => 'function' == typeof e[t]);
      }
    }
    var x = {
      today: {
        content: e => e.locale.today,
        onClick: e => e.setViewDate(new Date())
      },
      clear: { content: e => e.locale.clear, onClick: e => e.clear() }
    };
    class H {
      constructor(e) {
        let { dp: t, opts: i } = e;
        (this.dp = t), (this.opts = i), this.init();
      }
      init() {
        this.createElement(), this.render();
      }
      createElement() {
        this.$el = n({ className: 'air-datepicker-buttons' });
      }
      destroy() {
        this.$el.parentNode.removeChild(this.$el);
      }
      clearHtml() {
        return (this.$el.innerHTML = ''), this;
      }
      generateButtons() {
        let { buttons: e } = this.opts;
        Array.isArray(e) || (e = [e]),
          e.forEach(e => {
            let t = e;
            'string' == typeof e && x[e] && (t = x[e]);
            let i = this.createButton(t);
            t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
          });
      }
      attachEventToButton(e, t) {
        e.addEventListener('click', () => {
          t(this.dp);
        });
      }
      createButton(e) {
        let { content: t, className: i, tagName: s = 'button', attrs: a = {} } = e;
        return n({
          tagName: s,
          innerHtml: `<span tabindex='-1'>${'function' == typeof t ? t(this.dp) : t}</span>`,
          className: u('air-datepicker-button', i),
          attrs: a
        });
      }
      render() {
        this.generateButtons();
      }
    }
    function E(e, t, i) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ('object' != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, 'string');
              if ('object' != typeof s) return s;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            })
          : (e[t] = i),
        e
      );
    }
    class L {
      constructor() {
        let { opts: e, dp: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        E(this, 'toggleTimepickerIsActive', e => {
          this.dp.timepickerIsActive = e;
        }),
          E(this, 'onChangeSelectedDate', e => {
            let { date: t, updateTime: i = false } = e;
            t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
          }),
          E(this, 'onChangeLastSelectedDate', e => {
            e && (this.setTime(e), this.render());
          }),
          E(this, 'onChangeInputRange', e => {
            let t = e.target;
            (this[t.getAttribute('name')] = t.value),
              this.updateText(),
              this.dp.trigger(i.eventChangeTime, {
                hours: this.hours,
                minutes: this.minutes
              });
          }),
          E(this, 'onMouseEnterLeave', e => {
            let t = e.target.getAttribute('name'),
              i = this.$minutesText;
            'hours' === t && (i = this.$hoursText), i.classList.toggle('-focus-');
          }),
          E(this, 'onFocus', () => {
            this.toggleTimepickerIsActive(true);
          }),
          E(this, 'onBlur', () => {
            this.toggleTimepickerIsActive(false);
          }),
          (this.opts = e),
          (this.dp = t);
        let { timeFormat: s } = this.dp.locale;
        s && (s.match(k('h')) || s.match(k('hh'))) && (this.ampm = true), this.init();
      }
      init() {
        this.setTime(this.dp.lastSelectedDate || this.dp.viewDate),
          this.createElement(),
          this.buildHtml(),
          this.defineDOM(),
          this.render(),
          this.bindDatepickerEvents(),
          this.bindDOMEvents();
      }
      bindDatepickerEvents() {
        this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
      }
      bindDOMEvents() {
        let e = 'input';
        navigator.userAgent.match(/trident/gi) && (e = 'change'),
          D(this.$ranges, e, this.onChangeInputRange),
          D(this.$ranges, 'mouseenter', this.onMouseEnterLeave),
          D(this.$ranges, 'mouseleave', this.onMouseEnterLeave),
          D(this.$ranges, 'focus', this.onFocus),
          D(this.$ranges, 'mousedown', this.onFocus),
          D(this.$ranges, 'blur', this.onBlur);
      }
      createElement() {
        this.$el = n({
          className: u('air-datepicker-time', { '-am-pm-': this.dp.ampm })
        });
      }
      destroy() {
        this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
          this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate),
          this.$el.parentNode.removeChild(this.$el);
      }
      buildHtml() {
        let {
          ampm: e,
          hours: t,
          displayHours: i,
          minutes: s,
          minHours: a,
          minMinutes: n,
          maxHours: r,
          maxMinutes: o,
          dayPeriod: h,
          opts: { hoursStep: l, minutesStep: c }
        } = this;
        this.$el.innerHTML =
          `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(
            i
          )}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   ` +
          (e ? `<span class='air-datepicker-time--current-ampm'>${h}</span>` : '') +
          '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' +
          `      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">` +
          `      <input type="range" name="minutes" value="${s}" min="${n}" max="${o}" step="${c}"/>   </div></div>`;
      }
      defineDOM() {
        let e = e => a(e, this.$el);
        (this.$ranges = this.$el.querySelectorAll('[type="range"]')),
          (this.$hours = e('[name="hours"]')),
          (this.$minutes = e('[name="minutes"]')),
          (this.$hoursText = e('.air-datepicker-time--current-hours')),
          (this.$minutesText = e('.air-datepicker-time--current-minutes')),
          (this.$ampm = e('.air-datepicker-time--current-ampm'));
      }
      setTime(e) {
        this.setMinMaxTime(e), this.setCurrentTime(e);
      }
      addTimeToDate(e) {
        e && (e.setHours(this.hours), e.setMinutes(this.minutes));
      }
      setMinMaxTime(e) {
        if ((this.setMinMaxTimeFromOptions(), e)) {
          let { minDate: t, maxDate: i } = this.dp;
          t && p(e, t) && this.setMinTimeFromMinDate(t), i && p(e, i) && this.setMaxTimeFromMaxDate(i);
        }
      }
      setCurrentTime(e) {
        let { hours: t, minutes: i } = e ? h(e) : this;
        (this.hours = f(t, this.minHours, this.maxHours)), (this.minutes = f(i, this.minMinutes, this.maxMinutes));
      }
      setMinMaxTimeFromOptions() {
        let { minHours: e, minMinutes: t, maxHours: i, maxMinutes: s } = this.opts;
        (this.minHours = f(e, 0, 23)), (this.minMinutes = f(t, 0, 59)), (this.maxHours = f(i, 0, 23)), (this.maxMinutes = f(s, 0, 59));
      }
      setMinTimeFromMinDate(e) {
        let { lastSelectedDate: t } = this.dp;
        (this.minHours = e.getHours()), t && t.getHours() > e.getHours() ? (this.minMinutes = this.opts.minMinutes) : (this.minMinutes = e.getMinutes());
      }
      setMaxTimeFromMaxDate(e) {
        let { lastSelectedDate: t } = this.dp;
        (this.maxHours = e.getHours()), t && t.getHours() < e.getHours() ? (this.maxMinutes = this.opts.maxMinutes) : (this.maxMinutes = e.getMinutes());
      }
      updateSliders() {
        (r(this.$hours, { min: this.minHours, max: this.maxHours }).value = this.hours),
          (r(this.$minutes, {
            min: this.minMinutes,
            max: this.maxMinutes
          }).value = this.minutes);
      }
      updateText() {
        (this.$hoursText.innerHTML = d(this.displayHours)), (this.$minutesText.innerHTML = d(this.minutes)), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
      }
      set hours(e) {
        this._hours = e;
        let { hours: t, dayPeriod: i } = l(e);
        (this.displayHours = this.ampm ? t : e), (this.dayPeriod = i);
      }
      get hours() {
        return this._hours;
      }
      render() {
        this.updateSliders(), this.updateText();
      }
    }
    function O(e, t, i) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ('object' != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, 'string');
              if ('object' != typeof s) return s;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            })
          : (e[t] = i),
        e
      );
    }
    class A {
      constructor(e) {
        let { dp: t, opts: i } = e;
        O(this, 'pressedKeys', new Set()),
          O(
            this,
            'hotKeys',
            new Map([
              [
                [
                  ['Control', 'ArrowRight'],
                  ['Control', 'ArrowUp']
                ],
                e => e.month++
              ],
              [
                [
                  ['Control', 'ArrowLeft'],
                  ['Control', 'ArrowDown']
                ],
                e => e.month--
              ],
              [
                [
                  ['Shift', 'ArrowRight'],
                  ['Shift', 'ArrowUp']
                ],
                e => e.year++
              ],
              [
                [
                  ['Shift', 'ArrowLeft'],
                  ['Shift', 'ArrowDown']
                ],
                e => e.year--
              ],
              [
                [
                  ['Alt', 'ArrowRight'],
                  ['Alt', 'ArrowUp']
                ],
                e => (e.year += 10)
              ],
              [
                [
                  ['Alt', 'ArrowLeft'],
                  ['Alt', 'ArrowDown']
                ],
                e => (e.year -= 10)
              ],
              [['Control', 'Shift', 'ArrowUp'], (e, t) => t.up()]
            ])
          ),
          O(this, 'handleHotKey', e => {
            let t = this.hotKeys.get(e),
              i = h(this.getInitialFocusDate());
            t(i, this.dp);
            let { year: s, month: a, date: n } = i,
              r = o(new Date(s, a));
            r < n && (n = r);
            let l = this.dp.getClampedDate(new Date(s, a, n));
            this.dp.setFocusDate(l, { viewDateTransition: true });
          }),
          O(this, 'isHotKeyPressed', () => {
            let e = false,
              t = this.pressedKeys.size,
              i = e => this.pressedKeys.has(e);
            for (let [s] of this.hotKeys) {
              if (e) break;
              if (Array.isArray(s[0]))
                s.forEach(a => {
                  e || t !== a.length || (e = a.every(i) && s);
                });
              else {
                if (t !== s.length) continue;
                e = s.every(i) && s;
              }
            }
            return e;
          }),
          O(this, 'isArrow', e => e >= 37 && e <= 40),
          O(this, 'onKeyDown', e => {
            let { key: t, which: i } = e,
              {
                dp: s,
                dp: { focusDate: a },
                opts: n
              } = this;
            this.registerKey(t);
            let r = this.isHotKeyPressed();
            if (r) return e.preventDefault(), void this.handleHotKey(r);
            if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);
            if ('Enter' === t) {
              if (s.currentView !== n.minView) return void s.down();
              if (a) {
                let e = s._checkIfDateIsSelected(a);
                return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
              }
            }
            'Escape' === t && this.dp.hide();
          }),
          O(this, 'onKeyUp', e => {
            this.removeKey(e.key);
          }),
          (this.dp = t),
          (this.opts = i),
          this.init();
      }
      init() {
        this.bindKeyboardEvents();
      }
      bindKeyboardEvents() {
        let { $el: e } = this.dp;
        e.addEventListener('keydown', this.onKeyDown), e.addEventListener('keyup', this.onKeyUp);
      }
      destroy() {
        let { $el: e } = this.dp;
        e.removeEventListener('keydown', this.onKeyDown), e.removeEventListener('keyup', this.onKeyUp), (this.hotKeys = null), (this.pressedKeys = null);
      }
      getInitialFocusDate() {
        let {
            focusDate: e,
            currentView: t,
            selectedDates: s,
            parsedViewDate: { year: a, month: n }
          } = this.dp,
          r = e || s[s.length - 1];
        if (!r)
          switch (t) {
            case i.days:
              r = new Date(a, n, new Date().getDate());
              break;
            case i.months:
              r = new Date(a, n, 1);
              break;
            case i.years:
              r = new Date(a, 0, 1);
          }
        return r;
      }
      focusNextCell(e) {
        let t = this.getInitialFocusDate(),
          { currentView: s } = this.dp,
          { days: a, months: n, years: r } = i,
          o = h(t),
          l = o.year,
          d = o.month,
          c = o.date;
        switch (e) {
          case 'ArrowLeft':
            s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
            break;
          case 'ArrowUp':
            s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
            break;
          case 'ArrowRight':
            s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
            break;
          case 'ArrowDown':
            s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
        }
        let u = this.dp.getClampedDate(new Date(l, d, c));
        this.dp.setFocusDate(u, { viewDateTransition: true });
      }
      registerKey(e) {
        this.pressedKeys.add(e);
      }
      removeKey(e) {
        this.pressedKeys.delete(e);
      }
    }
    let N = {
      on(e, t) {
        this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : (this.__events[e] = [t]);
      },
      off(e, t) {
        this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter(e => e !== t));
      },
      removeAllEvents() {
        this.__events = {};
      },
      trigger(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
        this.__events &&
          this.__events[e] &&
          this.__events[e].forEach(e => {
            e(...i);
          });
      }
    };
    function I(e, t, i) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ('object' != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(e, 'string');
              if ('object' != typeof s) return s;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            })
          : (e[t] = i),
        e
      );
    }
    let P = '',
      j = '',
      B = false;
    class R {
      static buildGlobalContainer(e) {
        (B = true), (P = n({ className: e, id: e })), a('body').appendChild(P);
      }
      constructor(e, t) {
        var r = this;
        if (
          (I(this, 'viewIndexes', [i.days, i.months, i.years]),
          I(this, 'next', () => {
            let { year: e, month: t } = this.parsedViewDate;
            switch (this.currentView) {
              case i.days:
                this.setViewDate(new Date(e, t + 1, 1));
                break;
              case i.months:
                this.setViewDate(new Date(e + 1, t, 1));
                break;
              case i.years:
                this.setViewDate(new Date(e + 10, 0, 1));
            }
          }),
          I(this, 'prev', () => {
            let { year: e, month: t } = this.parsedViewDate;
            switch (this.currentView) {
              case i.days:
                this.setViewDate(new Date(e, t - 1, 1));
                break;
              case i.months:
                this.setViewDate(new Date(e - 1, t, 1));
                break;
              case i.years:
                this.setViewDate(new Date(e - 10, 0, 1));
            }
          }),
          I(this, '_finishHide', () => {
            // console.log('container', this.$container);
            this.hideAnimation = false;
            if (this.$container) {
              this._destroyComponents();
              this.$container.removeChild(this.$datepicker);
            }
          }),
          I(this, 'setPosition', function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if ('function' == typeof (e = e || r.opts.position))
              return void (r.customHide = e({
                $datepicker: r.$datepicker,
                $target: r.$el,
                $pointer: r.$pointer,
                isViewChange: t,
                done: r._finishHide
              }));
            let i,
              s,
              { isMobile: a } = r.opts,
              n = r.$el.getBoundingClientRect(),
              o = r.$el.getBoundingClientRect(),
              h = r.$datepicker.offsetParent,
              l = r.$el.offsetParent,
              d = r.$datepicker.getBoundingClientRect(),
              c = e.split(' '),
              u = window.scrollY,
              p = window.scrollX,
              m = r.opts.offset,
              v = c[0],
              g = c[1];
            if (a) r.$datepicker.style.cssText = 'left: 50%; top: 50%';
            else {
              if (
                (h === l &&
                  h !== document.body &&
                  ((o = {
                    top: r.$el.offsetTop,
                    left: r.$el.offsetLeft,
                    width: n.width,
                    height: r.$el.offsetHeight
                  }),
                  (u = 0),
                  (p = 0)),
                h !== l && h !== document.body)
              ) {
                let e = h.getBoundingClientRect();
                (o = {
                  top: n.top - e.top,
                  left: n.left - e.left,
                  width: n.width,
                  height: n.height
                }),
                  (u = 0),
                  (p = 0);
              }
              switch (v) {
                case 'top':
                  i = o.top - d.height - m;
                  break;
                case 'right':
                  s = o.left + o.width + m;
                  break;
                case 'bottom':
                  i = o.top + o.height + m;
                  break;
                case 'left':
                  s = o.left - d.width - m;
              }
              switch (g) {
                case 'top':
                  i = o.top;
                  break;
                case 'right':
                  s = o.left + o.width - d.width;
                  break;
                case 'bottom':
                  i = o.top + o.height - d.height;
                  break;
                case 'left':
                  s = o.left;
                  break;
                case 'center':
                  /left|right/.test(v) ? (i = o.top + o.height / 2 - d.height / 2) : (s = o.left + o.width / 2 - d.width / 2);
              }
              r.$datepicker.style.cssText = `left: ${s + p}px; top: ${i + u}px`;
            }
          }),
          I(this, '_setInputValue', () => {
            let {
                opts: e,
                $altField: t,
                locale: { dateFormat: i }
              } = this,
              { altFieldDateFormat: s, altField: a } = e;
            a && t && (t.value = this._getInputValue(s)), (this.$el.value = this._getInputValue(i));
          }),
          I(this, '_getInputValue', e => {
            let { selectedDates: t, opts: i } = this,
              { multipleDates: s, multipleDatesSeparator: a } = i;
            if (!t.length) return '';
            let n = 'function' == typeof e,
              r = n ? e(s ? t : t[0]) : t.map(t => this.formatDate(t, e));
            return (r = n ? r : r.join(a)), r;
          }),
          I(this, '_checkIfDateIsSelected', function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days,
              s = false;
            return (
              r.selectedDates.some(i => {
                let a = p(e, i, t);
                return (s = a && i), a;
              }),
              s
            );
          }),
          I(this, '_scheduleCallAfterTransition', e => {
            this._cancelScheduledCall(),
              e && e(false),
              (this._onTransitionEnd = () => {
                e && e(true);
              }),
              this.$datepicker.addEventListener('transitionend', this._onTransitionEnd, { once: true });
          }),
          I(this, '_cancelScheduledCall', () => {
            this.$datepicker.removeEventListener('transitionend', this._onTransitionEnd);
          }),
          I(this, 'setViewDate', e => {
            if (!((e = b(e)) instanceof Date)) return;
            if (p(e, this.viewDate)) return;
            let t = this.viewDate;
            this.viewDate = e;
            let { onChangeViewDate: s } = this.opts;
            if (s) {
              let { month: e, year: t } = this.parsedViewDate;
              s({ month: e, year: t, decade: this.curDecade });
            }
            this.trigger(i.eventChangeViewDate, e, t);
          }),
          I(this, 'setFocusDate', function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (!e || (e = b(e)) instanceof Date) && ((r.focusDate = e), r.trigger(i.eventChangeFocusDate, e, t));
          }),
          I(this, 'setCurrentView', function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (r.viewIndexes.includes(e)) {
              if (((r.currentView = e), r.elIsInput && r.visible && r.setPosition(void 0, true), r.trigger(i.eventChangeCurrentView, e), !r.views[e])) {
                let t = (r.views[e] = new T({ dp: r, opts: r.opts, type: e }));
                r.shouldUpdateDOM && r.$content.appendChild(t.$el);
              }
              r.opts.onChangeView && !t.silent && r.opts.onChangeView(e);
            }
          }),
          I(this, '_updateLastSelectedDate', e => {
            (this.lastSelectedDate = e), this.trigger(i.eventChangeLastSelectedDate, e);
          }),
          I(this, 'destroy', () => {
            if (this.isDestroyed) return;
            let { showEvent: e, isMobile: t } = this.opts,
              i = this.$datepicker.parentNode;
            i && i.removeChild(this.$datepicker),
              this.$el.removeEventListener(e, this._onFocus),
              this.$el.removeEventListener('blur', this._onBlur),
              window.removeEventListener('resize', this._onResize),
              t && this._removeMobileAttributes(),
              this.keyboardNav && this.keyboardNav.destroy(),
              (this.views = null),
              (this.nav = null),
              (this.$datepicker = null),
              (this.opts = {}),
              (this.$customContainer = null),
              (this.viewDate = null),
              (this.focusDate = null),
              (this.selectedDates = []),
              (this.rangeDateFrom = null),
              (this.rangeDateTo = null),
              (this.isDestroyed = true);
          }),
          I(this, 'update', function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              s = w({}, r.opts),
              { silent: a } = t;
            w(r.opts, e);
            let { timepicker: n, buttons: o, range: h, selectedDates: l, isMobile: d } = r.opts,
              c = r.visible || r.treatAsInline;
            r._createMinMaxDates(),
              r._limitViewDateByMaxMinDates(),
              r._handleLocale(),
              l && ((r.selectedDates = []), r.selectDate(l, { silent: a })),
              e.view && r.setCurrentView(e.view, { silent: a }),
              r._setInputValue(),
              s.range && !h
                ? ((r.rangeDateTo = false), (r.rangeDateFrom = false))
                : !s.range && h && r.selectedDates.length && ((r.rangeDateFrom = r.selectedDates[0]), (r.rangeDateTo = r.selectedDates[1])),
              s.timepicker && !n
                ? (c && r.timepicker.destroy(), (r.timepicker = false), r.$timepicker.parentNode.removeChild(r.$timepicker))
                : !s.timepicker && n && r._addTimepicker(),
              !s.buttons && o
                ? r._addButtons()
                : s.buttons && !o
                ? (r.buttons.destroy(), r.$buttons.parentNode.removeChild(r.$buttons))
                : c && s.buttons && o && r.buttons.clearHtml().render(),
              !s.isMobile && d
                ? (r.treatAsInline || j || r._createMobileOverlay(), r._addMobileAttributes(), r.visible && r._showMobileOverlay())
                : s.isMobile && !d && (r._removeMobileAttributes(), r.visible && (j.classList.remove('-active-'), 'function' != typeof r.opts.position && r.setPosition())),
              c && (r.nav.update(), r.views[r.currentView].render(), r.currentView === i.days && r.views[r.currentView].renderDayNames());
          }),
          I(this, 'disableDate', (e, t) => {
            (Array.isArray(e) ? e : [e]).forEach(e => {
              let i = b(e);
              if (!i) return;
              let s = t ? 'delete' : 'add';
              this.disabledDates[s](this.formatDate(i, 'yyyy-MM-dd'));
              let a = this.getCell(i, this.currentViewSingular);
              a && a.adpCell.render();
            }, []);
          }),
          I(this, 'enableDate', e => {
            this.disableDate(e, true);
          }),
          I(this, 'isDateDisabled', e => {
            let t = b(e);
            return this.disabledDates.has(this.formatDate(t, 'yyyy-MM-dd'));
          }),
          I(this, 'isOtherMonth', e => {
            let { month: t } = h(e);
            return t !== this.parsedViewDate.month;
          }),
          I(this, 'isOtherYear', e => {
            let { year: t } = h(e);
            return t !== this.parsedViewDate.year;
          }),
          I(this, 'isOtherDecade', e => {
            let { year: t } = h(e),
              [i, s] = c(this.viewDate);
            return t < i || t > s;
          }),
          I(this, '_onChangeSelectedDate', e => {
            let { silent: t } = e;
            setTimeout(() => {
              this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
            });
          }),
          I(this, '_onChangeFocusedDate', function (e) {
            let { viewDateTransition: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e) return;
            let i = false;
            t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e), r.opts.onFocus && r.opts.onFocus({ datepicker: r, date: e });
          }),
          I(this, '_onChangeTime', e => {
            let { hours: t, minutes: i } = e,
              s = new Date(),
              {
                lastSelectedDate: a,
                opts: { onSelect: n }
              } = this,
              r = a;
            a || (r = s);
            let o = this.getCell(r, this.currentViewSingular),
              h = o && o.adpCell;
            (h && h.isDisabled) || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), n && this._triggerOnSelect()) : this.selectDate(r));
          }),
          I(this, '_onFocus', e => {
            this.visible || this.show();
          }),
          I(this, '_onBlur', e => {
            this.inFocus || !this.visible || this.opts.isMobile || this.hide();
          }),
          I(this, '_onMouseDown', e => {
            this.inFocus = true;
          }),
          I(this, '_onMouseUp', e => {
            (this.inFocus = false), this.$el.focus();
          }),
          I(this, '_onResize', () => {
            this.visible && 'function' != typeof this.opts.position && this.setPosition();
          }),
          I(this, '_onClickOverlay', () => {
            this.visible && this.hide();
          }),
          I(this, 'getViewDates', function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
            return T.getDatesFunction(e)(r);
          }),
          I(this, 'isWeekend', e => this.opts.weekends.includes(e)),
          I(this, 'getClampedDate', e => {
            let { minDate: t, maxDate: i } = this,
              s = e;
            return i && m(e, i) ? (s = i) : t && v(e, t) && (s = t), s;
          }),
          (this.$el = a(e)),
          !this.$el)
        )
          return;
        (this.$datepicker = n({ className: 'air-datepicker' })),
          (this.opts = w({}, s, t)),
          (this.$customContainer = !!this.opts.container && a(this.opts.container)),
          (this.$altField = a(this.opts.altField || false));
        let { view: o, startDate: l } = this.opts;
        l || (this.opts.startDate = new Date()),
          'INPUT' === this.$el.nodeName && (this.elIsInput = true),
          (this.inited = false),
          (this.visible = false),
          (this.viewDate = b(this.opts.startDate)),
          (this.focusDate = false),
          (this.initialReadonly = this.$el.getAttribute('readonly')),
          (this.customHide = false),
          (this.currentView = o),
          (this.selectedDates = []),
          (this.disabledDates = new Set()),
          (this.isDestroyed = false),
          (this.views = {}),
          (this.keys = []),
          (this.rangeDateFrom = ''),
          (this.rangeDateTo = ''),
          (this.timepickerIsActive = false),
          (this.treatAsInline = this.opts.inline || !this.elIsInput),
          this.init();
      }
      init() {
        let {
            opts: e,
            treatAsInline: t,
            opts: { inline: i, isMobile: s, selectedDates: n, keyboardNav: r, onlyTimepicker: o }
          } = this,
          h = a('body');
        (!B || (B && P && !h.contains(P))) && !i && this.elIsInput && !this.$customContainer && R.buildGlobalContainer(R.defaultGlobalContainerId),
          !s || j || t || this._createMobileOverlay(),
          this._handleLocale(),
          this._bindSubEvents(),
          this._createMinMaxDates(),
          this._limitViewDateByMaxMinDates(),
          this.elIsInput && (i || this._bindEvents(), r && !o && (this.keyboardNav = new A({ dp: this, opts: e }))),
          n && this.selectDate(n, { silent: true }),
          this.opts.visible && !t && this.show(),
          s && !t && this.$el.setAttribute('readonly', true),
          t && this._createComponents();
      }
      _createMobileOverlay() {
        (j = n({ className: 'air-datepicker-overlay' })), P.appendChild(j);
      }
      _createComponents() {
        let {
          opts: e,
          treatAsInline: t,
          opts: { inline: i, buttons: s, timepicker: a, position: n, classes: r, onlyTimepicker: o, isMobile: h }
        } = this;
        this._buildBaseHtml(),
          this.elIsInput && (i || this._setPositionClasses(n)),
          (!i && this.elIsInput) || this.$datepicker.classList.add('-inline-'),
          r && this.$datepicker.classList.add(...r.split(' ')),
          o && this.$datepicker.classList.add('-only-timepicker-'),
          h && !t && this._addMobileAttributes(),
          (this.views[this.currentView] = new T({
            dp: this,
            type: this.currentView,
            opts: e
          })),
          (this.nav = new V({ dp: this, opts: e })),
          a && this._addTimepicker(),
          s && this._addButtons(),
          this.$content.appendChild(this.views[this.currentView].$el),
          this.$nav.appendChild(this.nav.$el);
      }
      _destroyComponents() {
        for (let e in this.views) this.views[e].destroy();
        (this.views = {}), this.nav.destroy(), this.timepicker && this.timepicker.destroy();
      }
      _addMobileAttributes() {
        j.addEventListener('click', this._onClickOverlay), this.$datepicker.classList.add('-is-mobile-'), this.$el.setAttribute('readonly', true);
      }
      _removeMobileAttributes() {
        j.removeEventListener('click', this._onClickOverlay),
          this.$datepicker.classList.remove('-is-mobile-'),
          this.initialReadonly || '' === this.initialReadonly || this.$el.removeAttribute('readonly');
      }
      _createMinMaxDates() {
        let { minDate: e, maxDate: t } = this.opts;
        (this.minDate = !!e && b(e)), (this.maxDate = !!t && b(t));
      }
      _addTimepicker() {
        (this.$timepicker = n({ className: 'air-datepicker--time' })),
          this.$datepicker.appendChild(this.$timepicker),
          (this.timepicker = new L({ dp: this, opts: this.opts })),
          this.$timepicker.appendChild(this.timepicker.$el);
      }
      _addButtons() {
        (this.$buttons = n({ className: 'air-datepicker--buttons' })),
          this.$datepicker.appendChild(this.$buttons),
          (this.buttons = new H({ dp: this, opts: this.opts })),
          this.$buttons.appendChild(this.buttons.$el);
      }
      _bindSubEvents() {
        this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
      }
      _buildBaseHtml() {
        let { inline: e } = this.opts;
        var t, i;
        this.elIsInput
          ? e
            ? ((t = this.$datepicker), (i = this.$el).parentNode.insertBefore(t, i.nextSibling))
            : this.$container.appendChild(this.$datepicker)
          : this.$el.appendChild(this.$datepicker),
          (this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>'),
          (this.$content = a('.air-datepicker--content', this.$datepicker)),
          (this.$pointer = a('.air-datepicker--pointer', this.$datepicker)),
          (this.$nav = a('.air-datepicker--navigation', this.$datepicker));
      }
      _handleLocale() {
        let { locale: e, dateFormat: t, firstDay: i, timepicker: s, onlyTimepicker: a, timeFormat: n, dateTimeSeparator: r } = this.opts;
        var o;
        (this.locale = ((o = e), JSON.parse(JSON.stringify(o)))), t && (this.locale.dateFormat = t), void 0 !== n && '' !== n && (this.locale.timeFormat = n);
        let { timeFormat: h } = this.locale;
        if (('' !== i && (this.locale.firstDay = i), s && 'function' != typeof t)) {
          let e = h ? r : '';
          this.locale.dateFormat = [this.locale.dateFormat, h || ''].join(e);
        }
        a && 'function' != typeof t && (this.locale.dateFormat = this.locale.timeFormat);
      }
      _setPositionClasses(e) {
        if ('function' == typeof e) return void this.$datepicker.classList.add('-custom-position-');
        let t = (e = e.split(' '))[0],
          i = `air-datepicker -${t}-${e[1]}- -from-${t}-`;
        this.$datepicker.classList.add(...i.split(' '));
      }
      _bindEvents() {
        this.$el.addEventListener(this.opts.showEvent, this._onFocus),
          this.$el.addEventListener('blur', this._onBlur),
          this.$datepicker.addEventListener('mousedown', this._onMouseDown),
          this.$datepicker.addEventListener('mouseup', this._onMouseUp),
          window.addEventListener('resize', this._onResize);
      }
      _limitViewDateByMaxMinDates() {
        let { viewDate: e, minDate: t, maxDate: i } = this;
        i && m(e, i) && this.setViewDate(i), t && v(e, t) && this.setViewDate(t);
      }
      formatDate() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate,
          t = arguments.length > 1 ? arguments[1] : void 0;
        if (((e = b(e)), !(e instanceof Date))) return;
        let i = t,
          s = this.locale,
          a = h(e),
          n = a.dayPeriod,
          r = c(e),
          o = R.replacer,
          l = {
            T: e.getTime(),
            m: a.minutes,
            mm: a.fullMinutes,
            h: a.hours12,
            hh: a.fullHours12,
            H: a.hours,
            HH: a.fullHours,
            aa: n,
            AA: n.toUpperCase(),
            E: s.daysShort[a.day],
            EEEE: s.days[a.day],
            d: a.date,
            dd: a.fullDate,
            M: a.month + 1,
            MM: a.fullMonth,
            MMM: s.monthsShort[a.month],
            MMMM: s.months[a.month],
            yy: a.year.toString().slice(-2),
            yyyy: a.year,
            yyyy1: r[0],
            yyyy2: r[1]
          };
        for (let [e, t] of Object.entries(l)) i = o(i, k(e), t);
        return i;
      }
      down(e) {
        this._handleUpDownActions(e, 'down');
      }
      up(e) {
        this._handleUpDownActions(e, 'up');
      }
      selectDate(e) {
        let t,
          s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { currentView: a, parsedViewDate: n, selectedDates: r } = this,
          { updateTime: o } = s,
          { moveToOtherMonthsOnSelect: h, moveToOtherYearsOnSelect: l, multipleDates: d, range: c, autoClose: u, onBeforeSelect: p } = this.opts,
          v = r.length;
        if (Array.isArray(e))
          return (
            e.forEach(e => {
              this.selectDate(e, s);
            }),
            new Promise(e => {
              setTimeout(e);
            })
          );
        if ((e = b(e)) instanceof Date) {
          if (p && !p({ date: e, datepicker: this })) return Promise.resolve();
          if (
            (a === i.days && e.getMonth() !== n.month && h && (t = new Date(e.getFullYear(), e.getMonth(), 1)),
            a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)),
            t && this.setViewDate(t),
            d && !c)
          ) {
            if (v === d) return;
            this._checkIfDateIsSelected(e) || r.push(e);
          } else if (c)
            switch (v) {
              case 1:
                r.push(e),
                  this.rangeDateTo || (this.rangeDateTo = e),
                  m(this.rangeDateFrom, this.rangeDateTo) && ((this.rangeDateTo = this.rangeDateFrom), (this.rangeDateFrom = e)),
                  (this.selectedDates = [this.rangeDateFrom, this.rangeDateTo]);
                break;
              case 2:
                (this.selectedDates = [e]), (this.rangeDateFrom = e), (this.rangeDateTo = '');
                break;
              default:
                (this.selectedDates = [e]), (this.rangeDateFrom = e);
            }
          else this.selectedDates = [e];
          return (
            this.trigger(i.eventChangeSelectedDate, {
              action: i.actionSelectDate,
              silent: null == s ? void 0 : s.silent,
              date: e,
              updateTime: o
            }),
            this._updateLastSelectedDate(e),
            u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === v && this.hide() : this.hide()),
            new Promise(e => {
              setTimeout(e);
            })
          );
        }
      }
      unselectDate(e) {
        let t = this.selectedDates,
          s = this;
        if ((e = b(e)) instanceof Date)
          return t.some((a, n) => {
            if (p(a, e))
              return (
                t.splice(n, 1),
                s.selectedDates.length
                  ? ((s.rangeDateTo = ''), (s.rangeDateFrom = t[0]), s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1]))
                  : ((s.rangeDateFrom = ''), (s.rangeDateTo = ''), s._updateLastSelectedDate(false)),
                this.trigger(i.eventChangeSelectedDate, {
                  action: i.actionUnselectDate,
                  date: e
                }),
                true
              );
          });
      }
      replaceDate(e, t) {
        let s = this.selectedDates.find(t => p(t, e, this.currentView)),
          a = this.selectedDates.indexOf(s);
        a < 0 ||
          p(this.selectedDates[a], t, this.currentView) ||
          ((this.selectedDates[a] = t),
          this.trigger(i.eventChangeSelectedDate, {
            action: i.actionSelectDate,
            date: t,
            updateTime: true
          }),
          this._updateLastSelectedDate(t));
      }
      clear() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          (this.selectedDates = []),
          (this.rangeDateFrom = false),
          (this.rangeDateTo = false),
          (this.lastSelectedDate = false),
          this.trigger(i.eventChangeSelectedDate, {
            action: i.actionUnselectDate,
            silent: e.silent
          }),
          new Promise(e => {
            setTimeout(e);
          })
        );
      }
      show() {
        let { onShow: e, isMobile: t } = this.opts;
        this._cancelScheduledCall(),
          this.visible || this.hideAnimation || this._createComponents(),
          this.setPosition(this.opts.position),
          this.$datepicker.classList.add('-active-'),
          (this.visible = true),
          e && this._scheduleCallAfterTransition(e),
          t && this._showMobileOverlay();
      }
      hide() {
        let { onHide: e, isMobile: t } = this.opts,
          i = this._hasTransition();
        (this.visible = false),
          (this.hideAnimation = true),
          this.$datepicker.classList.remove('-active-'),
          this.customHide && this.customHide(),
          this.elIsInput && this.$el.blur(),
          this._scheduleCallAfterTransition(t => {
            !this.customHide && ((t && i) || (!t && !i)) && this._finishHide(), e && e(t);
          }),
          t && j.classList.remove('-active-');
      }
      _triggerOnSelect() {
        let e = [],
          t = [],
          {
            selectedDates: i,
            locale: s,
            opts: { onSelect: a, multipleDates: n, range: r }
          } = this,
          o = n || r,
          h = 'function' == typeof s.dateFormat;
        i.length && ((e = i.map(g)), (t = h ? (n ? s.dateFormat(e) : e.map(e => s.dateFormat(e))) : e.map(e => this.formatDate(e, s.dateFormat)))),
          a({
            date: o ? e : e[0],
            formattedDate: o ? t : t[0],
            datepicker: this
          });
      }
      _handleAlreadySelectedDates(e, t) {
        let { selectedDates: i, rangeDateFrom: s, rangeDateTo: a } = this,
          { range: n, toggleSelected: r } = this.opts,
          o = i.length,
          h = 'function' == typeof r ? r({ datepicker: this, date: t }) : r,
          l = Boolean(n && 1 === o && e),
          d = l ? g(t) : t;
        (n && !h && (2 !== o && this.selectDate(d), 2 === o && p(s, a))) || (h ? this.unselectDate(d) : this._updateLastSelectedDate(l ? d : e));
      }
      _handleUpDownActions(e, t) {
        if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
        let i = 'up' === t ? this.viewIndex + 1 : this.viewIndex - 1;
        i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i]);
      }
      getCell(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
        if (!((e = b(e)) instanceof Date)) return;
        let { year: s, month: a, date: n } = h(e),
          r = `[data-year="${s}"]`,
          o = `[data-month="${a}"]`,
          l = {
            [i.day]: `${r}${o}[data-date="${n}"]`,
            [i.month]: `${r}${o}`,
            [i.year]: `${r}`
          };
        return this.views[this.currentView] ? this.views[this.currentView].$el.querySelector(l[t]) : void 0;
      }
      _showMobileOverlay() {
        j.classList.add('-active-');
      }
      _hasTransition() {
        return (
          window
            .getComputedStyle(this.$datepicker)
            .getPropertyValue('transition-duration')
            .split(', ')
            .reduce((e, t) => parseFloat(t) + e, 0) > 0
        );
      }
      get shouldUpdateDOM() {
        return this.visible || this.treatAsInline;
      }
      get parsedViewDate() {
        return h(this.viewDate);
      }
      get currentViewSingular() {
        return this.currentView.slice(0, -1);
      }
      get curDecade() {
        return c(this.viewDate);
      }
      get viewIndex() {
        return this.viewIndexes.indexOf(this.currentView);
      }
      get isFinalView() {
        return this.currentView === i.years;
      }
      get hasSelectedDates() {
        return this.selectedDates.length > 0;
      }
      get isMinViewReached() {
        return this.currentView === this.opts.minView || this.currentView === i.days;
      }
      get $container() {
        return this.$customContainer || P;
      }
      static replacer(e, t, i) {
        return e.replace(t, function (e, t, s, a) {
          return t + i + a;
        });
      }
    }
    var K;
    return I(R, 'defaults', s), I(R, 'version', '3.5.3'), I(R, 'defaultGlobalContainerId', 'air-datepicker-global-container'), (K = R.prototype), Object.assign(K, N), t.default;
  })();
};

var AirDatepicker$1 = AirDatepicker();

const stdCalendarCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: ;border:0 solid;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:Santander Micro Text,Roboto,Helvetica,Arial,sans-serif;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder, textarea::-moz-placeholder{color:#9ca3af;color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;color:#6b7280;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],input:where(:not([type])),select,textarea{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,input:where(:not([type])):focus,select:focus,textarea:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple],[size]:where(select:not([size=\"1\"])){background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\")}@media (forced-colors:active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\")}@media (forced-colors:active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}@media (forced-colors:active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.max-h-max{max-height:-moz-max-content;max-height:max-content}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.resize-none{resize:none}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.\\!overflow-visible{overflow:visible!important}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.border{border-width:1px}.border-none{border-style:none}.\\!bg-white{--tw-bg-opacity:1!important;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))!important}.bg-alternative-light{--tw-bg-opacity:1;background-color:rgb(245 249 251/var(--tw-bg-opacity,1))}.bg-primary{--tw-bg-opacity:1;background-color:rgb(236 0 0/var(--tw-bg-opacity,1))}.px-5{padding-left:1.25rem;padding-right:1.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.text-dark{--tw-text-opacity:1;color:rgb(34 34 34/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.shadow-modal{--tw-shadow:0 1px 10px 0 hsla(0,0%,64%,.4);--tw-shadow-colored:0 1px 10px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-1000{transition-duration:1s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (max-width:1023px){.button-not-icon i{display:none}}i{--tw-text-opacity:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:rgb(34 34 34/var(--tw-text-opacity,1));font-family:var(--adp-font-family);font-family:SantanderIcons;font-style:normal;font-weight:400;line-height:1;text-rendering:auto}.icon-santander:before{content:\"\\aa010\"}.icon-now-logo:before{content:\"\\aa020\"}.icon-dollar-symbol:before{content:\"\\ab010\"}.icon-euro-symbol:before{content:\"\\ab011\"}.icon-pound-symbol:before{content:\"\\ab012\"}.icon-remittances-dollar:before{content:\"\\ab020\"}.icon-remittances-euro:before{content:\"\\ab021\"}.icon-remittances-pound:before{content:\"\\ab022\"}.icon-dollar:before{content:\"\\ab030\"}.icon-euro:before{content:\"\\ab031\"}.icon-pound:before{content:\"\\ab032\"}.icon-finance-purchase-dollar:before{content:\"\\ab040\"}.icon-finance-purchase-euro:before{content:\"\\ab041\"}.icon-finance-purchase-pound:before{content:\"\\ab042\"}.icon-account-group-dollar:before{content:\"\\ab050\"}.icon-account-group-euro:before{content:\"\\ab051\"}.icon-account-group-pound:before{content:\"\\ab052\"}.icon-redemption-dollar:before{content:\"\\ab060\"}.icon-redemption-euro:before{content:\"\\ab061\"}.icon-redemption-pound:before{content:\"\\ab062\"}.icon-change-account-associate-dollar:before{content:\"\\ab070\"}.icon-change-account-associate-euro:before{content:\"\\ab071\"}.icon-change-account-associate-pound:before{content:\"\\ab072\"}.icon-change-account-associate-poland-zloty:before{content:\"\\ab073\"}.icon-account-management-dollar:before{content:\"\\ab080\"}.icon-account-management-euro:before{content:\"\\ab081\"}.icon-account-management-pound:before{content:\"\\ab082\"}.icon-account-bonus-dollar:before{content:\"\\ab090\"}.icon-account-bonus-euro:before{content:\"\\ab091\"}.icon-account-bonus-pound:before{content:\"\\ab092\"}.icon-saving-account-dollar:before{content:\"\\ab100\"}.icon-saving-account-euro:before{content:\"\\ab101\"}.icon-saving-account-pound:before{content:\"\\ab102\"}.icon-bag-of-money-dollar:before{content:\"\\ab110\"}.icon-bag-of-money-euro:before{content:\"\\ab111\"}.icon-bag-of-money-pound:before{content:\"\\ab112\"}.icon-bag-of-money-taxes:before{content:\"\\ab113\"}.icon-dollar-bill:before{content:\"\\ab120\"}.icon-euro-bill-note:before{content:\"\\ab121\"}.icon-pound-note:before{content:\"\\ab122\"}.icon-bill:before{content:\"\\ab123\"}.icon-money-cash-dollar:before{content:\"\\ab130\"}.icon-money-cash-euro:before{content:\"\\ab131\"}.icon-money-cash-pound:before{content:\"\\ab132\"}.icon-payment-dollar:before{content:\"\\ab140\"}.icon-payment-euro:before{content:\"\\ab141\"}.icon-payment-pound:before{content:\"\\ab142\"}.icon-one-time-payment-dollar:before{content:\"\\ab150\"}.icon-one-time-payment-euro:before{content:\"\\ab151\"}.icon-one-time-payment-pound:before{content:\"\\ab152\"}.icon-payment-in-progress-dollar:before{content:\"\\ab160\"}.icon-payment-in-progress-euro:before{content:\"\\ab161\"}.icon-payment-in-progress-pound:before{content:\"\\ab162\"}.icon-recurrent-payment-dollar:before{content:\"\\ab170\"}.icon-recurrent-payment-euro:before{content:\"\\ab171\"}.icon-recurrent-payment-pound:before{content:\"\\ab172\"}.icon-schedule-payment-dollar:before{content:\"\\ab180\"}.icon-schedule-payment-euro:before{content:\"\\ab181\"}.icon-schedule-payment-pound:before{content:\"\\ab182\"}.icon-atm-dollar:before{content:\"\\ab190\"}.icon-atm-euro:before{content:\"\\ab191\"}.icon-atm-pound:before{content:\"\\ab192\"}.icon-withdraw-dollar:before{content:\"\\ab200\"}.icon-withdraw-euro:before{content:\"\\ab201\"}.icon-withdraw-pound:before{content:\"\\ab202\"}.icon-levy-received-dollar:before{content:\"\\ab210\"}.icon-levy-received-euro:before{content:\"\\ab211\"}.icon-levy-received-pound:before{content:\"\\ab212\"}.icon-confirming-advances-dollar:before{content:\"\\ab220\"}.icon-confirming-advances-euro:before{content:\"\\ab221\"}.icon-confirming-advances-pound:before{content:\"\\ab222\"}.icon-factoring-dollar:before{content:\"\\ab230\"}.icon-factoring-euro:before{content:\"\\ab231\"}.icon-factoring-pound:before{content:\"\\ab232\"}.icon-statements-dollar:before{content:\"\\ab240\"}.icon-statements-euro:before{content:\"\\ab241\"}.icon-statements-pound:before{content:\"\\ab242\"}.icon-paysheet-dollar:before{content:\"\\ab250\"}.icon-paysheet-euro:before{content:\"\\ab251\"}.icon-paysheet-pound:before{content:\"\\ab252\"}.icon-levy-sent-dollar:before{content:\"\\ab260\"}.icon-levy-sent-euro:before{content:\"\\ab261\"}.icon-levy-sent-pound:before{content:\"\\ab262\"}.icon-email-invoice-dollar:before{content:\"\\ab270\"}.icon-email-invoice-euro:before{content:\"\\ab271\"}.icon-email-invoice-pound:before{content:\"\\ab272\"}.icon-schedule-spending-dollar:before{content:\"\\ab280\"}.icon-schedule-spending-euro:before{content:\"\\ab281\"}.icon-schedule-spending-pound:before{content:\"\\ab282\"}.icon-account-search-dollar:before{content:\"\\ab290\"}.icon-account-search-euro:before{content:\"\\ab291\"}.icon-account-search-pound:before{content:\"\\ab292\"}.icon-online-value-dollar:before{content:\"\\ab300\"}.icon-online-value-euro:before{content:\"\\ab301\"}.icon-online-value-pound:before{content:\"\\ab302\"}.icon-mortgages-dollar:before{content:\"\\ab400\"}.icon-mortgages-euro:before{content:\"\\ab401\"}.icon-mortgages-pound:before{content:\"\\ab402\"}.icon-exhange:before{content:\"\\ab500\"}.icon-checking-account:before{content:\"\\ab510\"}.icon-checking-account-change:before{content:\"\\ab520\"}.icon-checking-account-closing:before{content:\"\\ab530\"}.icon-checking-account-open:before{content:\"\\ab540\"}.icon-portability:before{content:\"\\ab550\"}.icon-price:before{content:\"\\ab560\"}.icon-franc-switzerland:before{content:\"\\ab592\"}.icon-ngultrum-bhutan:before{content:\"\\ab593\"}.icon-dollar-timor-leste:before{content:\"\\ab594\"}.icon-rupiah-indonesia:before{content:\"\\ab595\"}.icon-metical-mozambique:before{content:\"\\ab596\"}.icon-pound-lebanon:before{content:\"\\ab597\"}.icon-dinar-tunisia:before{content:\"\\ab598\"}.icon-dollar-guyana:before{content:\"\\ab599\"}.icon-riyal-saudi-rupee-seychelles:before{content:\"\\ab600\"}.icon-kip:before{content:\"\\ab601\"}.icon-ringgit-malaysia:before{content:\"\\ab602\"}.icon-baht-thailand:before{content:\"\\ab603\"}.icon-franc-guinea:before{content:\"\\ab604\"}.icon-franc-rwanda:before{content:\"\\ab605\"}.icon-tenge-kazakhstan:before{content:\"\\ab606\"}.icon-dollar-brunei-bahamian:before{content:\"\\ab607\"}.icon-dinar-bahrain:before{content:\"\\ab608\"}.icon-dalasi-gambia:before{content:\"\\ab609\"}.icon-riyal-qatar:before{content:\"\\ab610\"}.icon-dinar-kuwait:before{content:\"\\ab611\"}.icon-ouguiya:before{content:\"\\ab612\"}.icon-pound-syria:before{content:\"\\ab613\"}.icon-rupee-pakistan:before{content:\"\\ab614\"}.icon-lev-bulgaria:before{content:\"\\ab615\"}.icon-franc-comoros:before{content:\"\\ab616\"}.icon-togrog:before{content:\"\\ab617\"}.icon-taka:before{content:\"\\ab618\"}.icon-kyat-kwacha:before{content:\"\\ab619\"}.icon-peso-philippines:before{content:\"\\ab620\"}.icon-dobra-sao-tome:before{content:\"\\ab621\"}.icon-pound-egypt:before{content:\"\\ab622\"}.icon-ariary-madagascar:before{content:\"\\ab623\"}.icon-rial-oman:before{content:\"\\ab624\"}.icon-rial-iran:before{content:\"\\ab625\"}.icon-shilling-somalia:before{content:\"\\ab626\"}.icon-dinar-algeria:before{content:\"\\ab627\"}.icon-rupee-nepal:before{content:\"\\ab628\"}.icon-dinar-iraq:before{content:\"\\ab629\"}.icon-kwanza:before{content:\"\\ab630\"}.icon-leone:before{content:\"\\ab631\"}.icon-dollar-jamaica:before{content:\"\\ab632\"}.icon-franc-congo:before{content:\"\\ab633\"}.icon-rand:before{content:\"\\ab634\"}.icon-naira-nigeria:before{content:\"\\ab635\"}.icon-rupee-india:before{content:\"\\ab636\"}.icon-dollar-singapore:before{content:\"\\ab637\"}.icon-florin-guilder:before{content:\"\\ab638\"}.icon-dong-vietnam:before{content:\"\\ab639\"}.icon-dinar-libya:before{content:\"\\ab640\"}.icon-pula-botswana:before{content:\"\\ab641\"}.icon-new-shekel-israel:before{content:\"\\ab642\"}.icon-dollar-liberia:before{content:\"\\ab643\"}.icon-dollar-namibia:before{content:\"\\ab644\"}.icon-pound-sudan:before{content:\"\\ab645\"}.icon-peso-uruguay:before{content:\"\\ab646\"}.icon-dirham:before{content:\"\\ab647\"}.icon-kuna:before{content:\"\\ab648\"}.icon-ruble-russia:before{content:\"\\ab649\"}.icon-dram:before{content:\"\\ab650\"}.icon-mark:before{content:\"\\ab651\"}.icon-lev:before{content:\"\\ab652\"}.icon-lari:before{content:\"\\ab653\"}.icon-forint:before{content:\"\\ab654\"}.icon-lira:before{content:\"\\ab655\"}.icon-hryvnia:before{content:\"\\ab656\"}.icon-ruble-belarus:before{content:\"\\ab657\"}.icon-denar:before{content:\"\\ab658\"}.icon-dinar:before{content:\"\\ab659\"}.icon-krona-krone:before{content:\"\\ab660\"}.icon-koruna-czech-republic:before{content:\"\\ab670\"}.icon-zloty-poland:before{content:\"\\ab680\"}.icon-dollar-australia:before{content:\"\\ab690\"}.icon-yen:before{content:\"\\ab700\"}.icon-yuan:before{content:\"\\ab710\"}.icon-real:before{content:\"\\ab720\"}.icon-won:before{content:\"\\ab730\"}.icon-boliviano:before{content:\"\\ab740\"}.icon-colon:before{content:\"\\ab750\"}.icon-quetzal:before{content:\"\\ab760\"}.icon-gourde:before{content:\"\\ab770\"}.icon-lempira-honduras:before{content:\"\\ab780\"}.icon-cordoba:before{content:\"\\ab790\"}.icon-guarani:before{content:\"\\ab800\"}.icon-sol:before{content:\"\\ab810\"}.icon-balboa:before{content:\"\\ab820\"}.icon-bolivar:before{content:\"\\ab830\"}.icon-peso-argentina-iso:before{content:\"\\ab840\"}.icon-dollar-america-iso:before{content:\"\\ab841\"}.icon-bolivar-soberano-iso:before{content:\"\\ab842\"}.icon-boliviano-iso:before{content:\"\\ab843\"}.icon-real-brazil-iso:before{content:\"\\ab844\"}.icon-peso-chile-iso:before{content:\"\\ab845\"}.icon-unidad-de-fomento-chile-iso:before{content:\"\\ab846\"}.icon-uf-chile-iso:before{content:\"\\ab847\"}.icon-peso-colombia-iso:before{content:\"\\ab848\"}.icon-euro-iso:before{content:\"\\ab849\"}.icon-pound-iso:before{content:\"\\ab850\"}.icon-sol-iso:before{content:\"\\ab851\"}.icon-peso-uruguay-iso:before{content:\"\\ab852\"}.icon-yen-iso:before{content:\"\\ab853\"}.icon-yuan-iso:before{content:\"\\ab854\"}.icon-krone-norway-iso:before{content:\"\\ab855\"}.icon-krone-denmark-iso:before{content:\"\\ab856\"}.icon-krona-iceland-iso:before{content:\"\\ab857\"}.icon-krona-sweden-iso:before{content:\"\\ab858\"}.icon-koruna-czech-republic-iso:before{content:\"\\ab859\"}.icon-zloty-poland-iso:before{content:\"\\ab860\"}.icon-dollar-australia-iso:before{content:\"\\ab861\"}.icon-compare-wallets:before{content:\"\\ac005\"}.icon-wallet:before{content:\"\\ac010\"}.icon-delete-account:before{content:\"\\ac020\"}.icon-new-account:before{content:\"\\ac030\"}.icon-debt:before{content:\"\\ac040\"}.icon-fixed-expenses:before{content:\"\\ac050\"}.icon-other-expenses:before{content:\"\\ac060\"}.icon-income-tax:before{content:\"\\ac070\"}.icon-overdraft:before{content:\"\\ac071\"}.icon-solidarity-rounding:before{content:\"\\ac080\"}.icon-transfer:before{content:\"\\ac090\"}.icon-sepa-transfers:before{content:\"\\ac100\"}.icon-factoring:before{content:\"\\ac110\"}.icon-no-transactions:before{content:\"\\ac120\"}.icon-edit-transfer:before{content:\"\\ac130\"}.icon-deferred-transfer:before{content:\"\\ac140\"}.icon-periodic-transfer:before{content:\"\\ac150\"}.icon-receipt-and-bills:before{content:\"\\ac160\"}.icon-receipt-management:before{content:\"\\ac170\"}.icon-rejected-receipts:before{content:\"\\ac180\"}.icon-return-receipt:before{content:\"\\ac190\"}.icon-cancel-next-receipt:before{content:\"\\ac200\"}.icon-duplicated-receipt:before{content:\"\\ac210\"}.icon-check:before{content:\"\\ac220\"}.icon-cancel-check:before{content:\"\\ac230\"}.icon-checkbook:before{content:\"\\ac240\"}.icon-cancel-checkbook:before{content:\"\\ac250\"}.icon-enter-money-atm:before{content:\"\\ac260\"}.icon-booklet-atm-enter:before{content:\"\\ac270\"}.icon-booklet-atm-withdraw:before{content:\"\\ac280\"}.icon-withdraw-money-atm:before{content:\"\\ac290\"}.icon-withdraw-receipt-atm:before{content:\"\\ac300\"}.icon-financial-indicator:before{content:\"\\ac310\"}.icon-invest:before{content:\"\\ac311\"}.icon-rescue-investment:before{content:\"\\ac312\"}.icon-investment-fund:before{content:\"\\ac313\"}.icon-automatic-savings:before{content:\"\\ac314\"}.icon-financial-manager:before{content:\"\\ac320\"}.icon-funds-transfer:before{content:\"\\ac321\"}.icon-value:before{content:\"\\ac330\"}.icon-value-decrease:before{content:\"\\ac340\"}.icon-value-increase:before{content:\"\\ac350\"}.icon-portfolio-of-values:before{content:\"\\ac360\"}.icon-savings:before{content:\"\\ac370\"}.icon-add-to-saving:before{content:\"\\ac371\"}.icon-move-from-saving:before{content:\"\\ac372\"}.icon-change-saving:before{content:\"\\ac373\"}.icon-saving-investment:before{content:\"\\ac380\"}.icon-renegotiation:before{content:\"\\ac390\"}.icon-capitalization:before{content:\"\\ac400\"}.icon-deposit-check:before{content:\"\\ac410\"}.icon-online-trading:before{content:\"\\ac420\"}.icon-online-banking:before{content:\"\\ac430\"}.icon-receive:before{content:\"\\ac440\"}.icon-received:before{content:\"\\ac450\"}.icon-previous-transfers:before{content:\"\\ac460\"}.icon-check-upcoming-transfers:before{content:\"\\ac470\"}.icon-check-previous-transfers:before{content:\"\\ac480\"}.icon-general-transfers:before{content:\"\\ac490\"}.icon-linear-economy:before{content:\"\\ac510\"}.icon-circular-economy:before{content:\"\\ac520\"}.icon-paris-agreement:before{content:\"\\ac530\"}.icon-equator-principles:before{content:\"\\ac531\"}.icon-responsible-ranking:before{content:\"\\ac532\"}.icon-responsible-investment:before{content:\"\\ac533\"}.icon-portfolio-alignment:before{content:\"\\ac534\"}.icon-esg-funds:before{content:\"\\ac535\"}.icon-green-bond:before{content:\"\\ac536\"}.icon-transfer-2:before{content:\"\\ac537\"}.icon-renting:before{content:\"\\ac538\"}.icon-card:before{content:\"\\ad010\"}.icon-card-block:before{content:\"\\ad020\"}.icon-unblock-card:before{content:\"\\ad030\"}.icon-direct-money:before{content:\"\\ad040\"}.icon-swift-cards:before{content:\"\\ad050\"}.icon-card-postpone-liquidation:before{content:\"\\ad060\"}.icon-modify-liquidation-method:before{content:\"\\ad070\"}.icon-card-configuration:before{content:\"\\ad071\"}.icon-operate-without-card:before{content:\"\\ad080\"}.icon-e-card:before{content:\"\\ad090\"}.icon-e-cash:before{content:\"\\ad100\"}.icon-card-enter-e-cash:before{content:\"\\ad110\"}.icon-withdraw-e-cash:before{content:\"\\ad120\"}.icon-card-insert:before{content:\"\\ad130\"}.icon-card-extract:before{content:\"\\ad140\"}.icon-loyalty-card:before{content:\"\\ad150\"}.icon-gift-card:before{content:\"\\ad160\"}.icon-discount-card:before{content:\"\\ad170\"}.icon-id-card:before{content:\"\\ad180\"}.icon-mobile-payment:before{content:\"\\ad190\"}.icon-digital-subscriptions-cards:before{content:\"\\ad200\"}.icon-cvv-number:before{content:\"\\ad210\"}.icon-cards:before{content:\"\\ad220\"}.icon-insert-card:before{content:\"\\ad230\"}.icon-accounts-and-cards:before{content:\"\\ad240\"}.icon-get-pin-number:before{content:\"\\ae010\"}.icon-coordinates-card:before{content:\"\\ae020\"}.icon-get-money-atm-code:before{content:\"\\ae030\"}.icon-password-typing:before{content:\"\\ae040\"}.icon-recover-access-keys:before{content:\"\\ae050\"}.icon-get-your-key:before{content:\"\\ae060\"}.icon-security-error:before{content:\"\\ae070\"}.icon-security-verified:before{content:\"\\ae080\"}.icon-security-close:before{content:\"\\ae090\"}.icon-security-block:before{content:\"\\ae100\"}.icon-lockout:before{content:\"\\ae110\"}.icon-security-open:before{content:\"\\ae120\"}.icon-security:before{content:\"\\ae130\"}.icon-civil-liability:before{content:\"\\ae140\"}.icon-fraud:before{content:\"\\ae150\"}.icon-security-advice:before{content:\"\\ae170\"}.icon-security-configuration:before{content:\"\\ae180\"}.icon-securize-payment:before{content:\"\\ae190\"}.icon-protected-home:before{content:\"\\ae191\"}.icon-phishing:before{content:\"\\ae192\"}.icon-broker-plataform:before{content:\"\\af010\"}.icon-stock-exchange:before{content:\"\\af020\"}.icon-bar-chart:before{content:\"\\af021\"}.icon-candlestick-chart:before{content:\"\\af022\"}.icon-quotations:before{content:\"\\af030\"}.icon-green-asset:before{content:\"\\af031\"}.icon-analysis:before{content:\"\\af040\"}.icon-sustainability-linked-loans:before{content:\"\\af041\"}.icon-european-chart:before{content:\"\\af045\"}.icon-burndownchart2:before{content:\"\\af050\"}.icon-burndowncharct:before{content:\"\\af060\"}.icon-bank-fees:before{content:\"\\af070\"}.icon-pizza-chart:before{content:\"\\af071\"}.icon-sitemap:before{content:\"\\af080\"}.icon-steps:before{content:\"\\af090\"}.icon-mobile:before{content:\"\\ba010\"}.icon-mobile-landscape:before{content:\"\\ba020\"}.icon-increase2:before{content:\"\\ba030\"}.icon-mobile-chart:before{content:\"\\ba040\"}.icon-mobile-message:before{content:\"\\ba050\"}.icon-mobile-top-up:before{content:\"\\ba060\"}.icon-app-santander:before{content:\"\\ba070\"}.icon-nfc:before{content:\"\\ba080\"}.icon-calculator:before{content:\"\\ba090\"}.icon-card-machine:before{content:\"\\ba100\"}.icon-digital-subscriptions:before{content:\"\\ba110\"}.icon-digital-subscriptions-contactless:before{content:\"\\ba120\"}.icon-laptop:before{content:\"\\ba130\"}.icon-desktop:before{content:\"\\ba140\"}.icon-old-version:before{content:\"\\ba150\"}.icon-mouse:before{content:\"\\ba160\"}.icon-smartwatch:before{content:\"\\ba170\"}.icon-smartwatch-payment:before{content:\"\\ba180\"}.icon-radio:before{content:\"\\ba190\"}.icon-tv:before{content:\"\\ba200\"}.icon-videogames-switch:before{content:\"\\ba210\"}.icon-videogames:before{content:\"\\ba220\"}.icon-pacman:before{content:\"\\ba230\"}.icon-ghost:before{content:\"\\ba240\"}.icon-digital-channels:before{content:\"\\ba250\"}.icon-atm:before{content:\"\\ba260\"}.icon-nfc-bracelet:before{content:\"\\ba270\"}.icon-nfc-sticker:before{content:\"\\ba280\"}.icon-eolic-energy:before{content:\"\\bb010\"}.icon-solar-energy:before{content:\"\\bb020\"}.icon-petrol-tower:before{content:\"\\bb030\"}.icon-atom:before{content:\"\\bb040\"}.icon-plug:before{content:\"\\bb050\"}.icon-energy:before{content:\"\\bb060\"}.icon-sound-wave:before{content:\"\\bb070\"}.icon-pill:before{content:\"\\bb080\"}.icon-dna:before{content:\"\\bb090\"}.icon-chemistry:before{content:\"\\bb100\"}.icon-sim-chip:before{content:\"\\bb110\"}.icon-code-window:before{content:\"\\bb120\"}.icon-sim-chip-insert:before{content:\"\\bb130\"}.icon-circuit:before{content:\"\\bb140\"}.icon-antenna:before{content:\"\\bb150\"}.icon-at:before{content:\"\\bb160\"}.icon-cloud:before{content:\"\\bb170\"}.icon-upload-to-cloud:before{content:\"\\bb180\"}.icon-download-from-cloud:before{content:\"\\bb190\"}.icon-wi-fi:before{content:\"\\bb200\"}.icon-free-wi-fi:before{content:\"\\bb210\"}.icon-contacless:before{content:\"\\bb220\"}.icon-firewall:before{content:\"\\bb230\"}.icon-sustainable-development-goals:before{content:\"\\bb240\"}.icon-document:before{content:\"\\bc010\"}.icon-attach-document:before{content:\"\\bc020\"}.icon-change-contributions:before{content:\"\\bc030\"}.icon-legal-document:before{content:\"\\bc040\"}.icon-incomplete:before{content:\"\\bc050\"}.icon-terms-conditions:before{content:\"\\bc051\"}.icon-file-transfer:before{content:\"\\bc052\"}.icon-card-invoice:before{content:\"\\bc053\"}.icon-details:before{content:\"\\bc054\"}.icon-cms:before{content:\"\\bc055\"}.icon-document-txt:before{content:\"\\bc060\"}.icon-document-pdf:before{content:\"\\bc070\"}.icon-document-doc:before{content:\"\\bc080\"}.icon-document-xls:before{content:\"\\bc090\"}.icon-document-xml:before{content:\"\\bc091\"}.icon-document-ppt:before{content:\"\\bc100\"}.icon-document-sketch:before{content:\"\\bc110\"}.icon-document-svg:before{content:\"\\bc120\"}.icon-document-png:before{content:\"\\bc130\"}.icon-document-bdr:before{content:\"\\bc140\"}.icon-document-etf:before{content:\"\\bc141\"}.icon-document-cv:before{content:\"\\bc150\"}.icon-document-zip:before{content:\"\\bc151\"}.icon-document-csv:before{content:\"\\bc152\"}.icon-document-log:before{content:\"\\bc153\"}.icon-compressed-document:before{content:\"\\bc154\"}.icon-save-document:before{content:\"\\bc155\"}.icon-definition-of-done:before{content:\"\\bc160\"}.icon-definition-of-ready:before{content:\"\\bc170\"}.icon-epic:before{content:\"\\bc180\"}.icon-userstory:before{content:\"\\bc190\"}.icon-refinement:before{content:\"\\bc200\"}.icon-sprintplaning:before{content:\"\\bc210\"}.icon-copy:before{content:\"\\bc220\"}.icon-sign-up:before{content:\"\\bc230\"}.icon-clipboard:before{content:\"\\bc240\"}.icon-checklist:before{content:\"\\bc250\"}.icon-backlog:before{content:\"\\bc260\"}.icon-scroll:before{content:\"\\bc270\"}.icon-newspaper:before{content:\"\\bc280\"}.icon-gift-ticket:before{content:\"\\bc290\"}.icon-book:before{content:\"\\bc300\"}.icon-passport:before{content:\"\\bc310\"}.icon-passport-open:before{content:\"\\bc315\"}.icon-calendar:before,.icon-range:before{content:\"\\bc320\"}.icon-appointments:before{content:\"\\bc330\"}.icon-cancel-appointments:before{content:\"\\bc335\"}.icon-add-to-calendar:before{content:\"\\bc340\"}.icon-quick-appointment:before{content:\"\\bc350\"}.icon-request-appointment:before{content:\"\\bc360\"}.icon-contacts:before{content:\"\\bc370\"}.icon-image:before{content:\"\\bc380\"}.icon-image-unavailable:before{content:\"\\bc390\"}.icon-folder:before{content:\"\\bc400\"}.icon-add-folder:before{content:\"\\bc401\"}.icon-file:before{content:\"\\bc410\"}.icon-attachment:before{content:\"\\bc420\"}.icon-trash-bin:before{content:\"\\bc430\"}.icon-bookmark:before{content:\"\\bc440\"}.icon-signature-pending:before{content:\"\\bc450\"}.icon-faq:before{content:\"\\bc460\"}.icon-stack:before{content:\"\\bc470\"}.icon-taxonomy-regulation:before{content:\"\\bc480\"}.icon-regulation:before{content:\"\\bc490\"}.icon-task-force:before{content:\"\\bc510\"}.icon-message-details:before{content:\"\\bc520\"}.icon-message-info:before{content:\"\\bc530\"}.icon-step-0:before{content:\"\\bd000\"}.icon-step-1:before{content:\"\\bd001\"}.icon-step-2:before{content:\"\\bd002\"}.icon-step-3:before{content:\"\\bd003\"}.icon-step-4:before{content:\"\\bd004\"}.icon-step-5:before{content:\"\\bd005\"}.icon-step-6:before{content:\"\\bd006\"}.icon-step-7:before{content:\"\\bd007\"}.icon-step-8:before{content:\"\\bd008\"}.icon-step-9:before{content:\"\\bd009\"}.icon-close:before{content:\"\\bd010\"}.icon-close-1px:before{content:\"\\bd020\"}.icon-backspace:before{content:\"\\bd021\"}.icon-backspace-fill:before{content:\"\\bd022\"}.icon-add:before{content:\"\\bd030\"}.icon-add-1px:before{content:\"\\bd040\"}.icon-santander-plus:before{content:\"\\bd050\"}.icon-minimise:before{content:\"\\bd060\"}.icon-subtract:before{content:\"\\bd065\"}.icon-minimise-1px:before{content:\"\\bd070\"}.icon-subtract-1px:before{content:\"\\bd075\"}.icon-burger-menu:before{content:\"\\bd080\"}.icon-burger-menu-asymmetrical:before{content:\"\\bd081\"}.icon-burger-menu-1px:before{content:\"\\bd090\"}.icon-burger-menu-asymmetrical-1px:before{content:\"\\bd091\"}.icon-3-dots-horizontal:before{content:\"\\bd100\"}.icon-3-dots-vertical:before{content:\"\\bd110\"}.icon-error:before{content:\"\\bd120\"}.icon-add-in-a-circle:before{content:\"\\bd130\"}.icon-minus-in-a-circle:before{content:\"\\bd140\"}.icon-warning-in-a-circle:before{content:\"\\bd150\"}.icon-help-in-a-circle:before{content:\"\\bd160\"}.icon-information-in-a-circle:before{content:\"\\bd170\"}.icon-information-in-a-circle-2px:before{content:\"\\bd171\"}.icon-block-in-a-circle:before{content:\"\\bd180\"}.icon-checkmark-in-a-circle:before{content:\"\\bd190\"}.icon-more-in-a-circle:before{content:\"\\bd200\"}.icon-radio-button:before{content:\"\\bd210\"}.icon-play-button:before{content:\"\\bd220\"}.icon-webmotors:before{content:\"\\bd230\"}.icon-token:before{content:\"\\bd240\"}.icon-token-migration:before{content:\"\\bd250\"}.icon-daily:before{content:\"\\bd260\"}.icon-edit:before{content:\"\\bd270\"}.icon-subscription:before{content:\"\\bd280\"}.icon-search:before{content:\"\\bd290\"}.icon-search-2px:before{content:\"\\bd291\"}.icon-queries:before{content:\"\\bd300\"}.icon-zoom-in:before{content:\"\\bd310\"}.icon-zoom-out:before{content:\"\\bd320\"}.icon-settings:before{content:\"\\bd330\"}.icon-utilities-services:before{content:\"\\bd340\"}.icon-star:before{content:\"\\bd350\"}.icon-star-fill:before{content:\"\\bd351\"}.icon-featured:before{content:\"\\bd360\"}.icon-audio-on:before{content:\"\\bd370\"}.icon-audio-off:before{content:\"\\bd380\"}.icon-filter:before{content:\"\\bd390\"}.icon-filter-fill:before{content:\"\\bd391\"}.icon-filter-deactivate:before{content:\"\\bd400\"}.icon-highlighted-services:before{content:\"\\bd410\"}.icon-flag:before{content:\"\\bd420\"}.icon-link:before{content:\"\\bd430\"}.icon-position:before{content:\"\\bd440\"}.icon-center-position:before{content:\"\\bd450\"}.icon-visibility-on:before{content:\"\\bd460\"}.icon-visibility-off:before{content:\"\\bd470\"}.icon-mic:before{content:\"\\bd480\"}.icon-mic-off:before{content:\"\\bd490\"}.icon-mic-on:before{content:\"\\bd500\"}.icon-print:before{content:\"\\bd510\"}.icon-scanner:before{content:\"\\bd511\";content:\"\\bd690\"}.icon-check-scanner:before{content:\"\\bd512\"}.icon-bill-recycler:before{content:\"\\bd513\"}.icon-check-asigment:before{content:\"\\bd520\"}.icon-placeholder:before{content:\"\\bd530\"}.icon-slot:before{content:\"\\bd531\"}.icon-alert:before{content:\"\\bd540\"}.icon-alert-2:before{content:\"\\bd541\"}.icon-alert-2-fill:before{content:\"\\bd542\"}.icon-font-adjust:before{content:\"\\bd550\"}.icon-font-size-increase:before{content:\"\\bd560\"}.icon-font-size-decrease:before{content:\"\\bd570\"}.icon-alphabetical-order:before{content:\"\\bd580\"}.icon-language:before{content:\"\\bd590\"}.icon-percent:before{content:\"\\bd600\"}.icon-discount:before{content:\"\\bd610\"}.icon-offer-discount:before{content:\"\\bd620\"}.icon-error-400-500:before{content:\"\\bd630\"}.icon-non-supported-browser:before{content:\"\\bd640\"}.icon-window-success:before{content:\"\\bd650\"}.icon-edit-browser:before{content:\"\\bd651\"}.icon-authentication:before{content:\"\\bd660\"}.icon-face-id:before{content:\"\\bd670\"}.icon-face-id-apple:before{content:\"\\bd675\"}.icon-barcode:before{content:\"\\bd680\"}.icon-qr-advanced:before{content:\"\\bd695\"}.icon-qr-code:before{content:\"\\bd700\"}.icon-camera:before{content:\"\\bd710\"}.icon-add-photo:before{content:\"\\bd715\"}.icon-selfie:before{content:\"\\bd720\"}.icon-history:before{content:\"\\bd730\"}.icon-timeout:before{content:\"\\bd740\"}.icon-24h:before{content:\"\\bd741\"}.icon-clock-out:before{content:\"\\bd742\"}.icon-clock-restart:before{content:\"\\bd743\"}.icon-day-and-time-change:before{content:\"\\bd750\"}.icon-urgent:before{content:\"\\bd760\"}.icon-now:before{content:\"\\bd770\"}.icon-hi-contrast:before{content:\"\\bd780\"}.icon-periodical-input:before{content:\"\\bd790\"}.icon-subscription-model:before{content:\"\\bd800\"}.icon-collapse-keyboard:before{content:\"\\bd810\"}.icon-success:before{content:\"\\bd820\"}.icon-aesthetics:before{content:\"\\bd830\"}.icon-others:before{content:\"\\bd840\"}.icon-apps:before{content:\"\\bd841\"}.icon-apps-2:before{content:\"\\bd842\"}.icon-warning:before{content:\"\\bd850\"}.icon-checkmark:before{content:\"\\bd860\"}.icon-checkmark-2px:before{content:\"\\bd861\"}.icon-american:before{content:\"\\bd870\"}.icon-plusless:before{content:\"\\bd880\"}.icon-heart:before{content:\"\\bd890\"}.icon-popup:before{content:\"\\bd900\"}.icon-power:before{content:\"\\bd910\"}.icon-network-share:before{content:\"\\bd920\"}.icon-correct:before{content:\"\\bd930\"}.icon-e_:before{content:\"\\bd940\"}.icon-pix:before{content:\"\\bd950\"}.icon-dragndrop:before{content:\"\\bd960\"}.icon-rows:before{content:\"\\bd961\"}.icon-rows-2:before{content:\"\\bd962\"}.icon-rows-3:before{content:\"\\bd963\"}.icon-equal:before{content:\"\\bd964\"}.icon-not-equal:before{content:\"\\bd965\"}.icon-greater-than:before{content:\"\\bd966\"}.icon-lesser-than:before{content:\"\\bd967\"}.icon-greater-or-equals:before{content:\"\\bd968\"}.icon-lesser-or-equals:before{content:\"\\bd969\"}.icon-list:before{content:\"\\bd970\"}.icon-euro-stars-ecb:before{content:\"\\bd980\"}.icon-climate-change:before{content:\"\\bd990\"}.icon-grid-view:before{content:\"\\bd991\"}.icon-list-view:before{content:\"\\bd992\"}.icon-table-view:before{content:\"\\bd993\"}.icon-selector-list:before{content:\"\\bd994\"}.icon-go-to-web:before{content:\"\\bd995\"}.icon-pause:before{content:\"\\bd996\"}.icon-tree-child:before{content:\"\\bd999\"}.icon-chevron-up:before{content:\"\\be010\"}.icon-chevron-up-1px:before{content:\"\\be020\"}.icon-chevron-up-small:before{content:\"\\be030\"}.icon-chevron-up-small-1px:before{content:\"\\be040\"}.icon-chevron-right:before{content:\"\\be050\"}.icon-chevron-right-1px:before{content:\"\\be060\"}.icon-chevron-right-small:before{content:\"\\be070\"}.icon-chevron-right-small-1px:before{content:\"\\be080\"}.icon-chevron-down:before{content:\"\\be090\"}.icon-chevron-down-1px:before{content:\"\\be100\"}.icon-chevron-down-small:before{content:\"\\be110\"}.icon-chevron-down-small-1px:before{content:\"\\be120\"}.icon-chefron-left:before{content:\"\\be130\"}.icon-chevron-left-1px:before{content:\"\\be140\"}.icon-chevron-left-small:before{content:\"\\be150\"}.icon-chevron-left-small-1px:before{content:\"\\be160\"}.icon-arrow-left:before{content:\"\\be170\"}.icon-arrow-left-2px:before{content:\"\\be171\"}.icon-arrow-up:before{content:\"\\be175\"}.icon-arrow-up-2px:before{content:\"\\be176\"}.icon-arrow-right:before{content:\"\\be180\"}.icon-arrow-right-2px:before{content:\"\\be181\"}.icon-arrow-down:before{content:\"\\be185\"}.icon-arrow-down-2px:before{content:\"\\be186\"}.icon-income-expenses:before{content:\"\\be190\"}.icon-transitions:before{content:\"\\be200\"}.icon-trade:before{content:\"\\be210\"}.icon-full-screen:before{content:\"\\be220\"}.icon-full-screen-2:before{content:\"\\be221\"}.icon-full-screen-exit:before{content:\"\\be222\"}.icon-refresh-reload-screen:before{content:\"\\be230\"}.icon-reload:before{content:\"\\be240\"}.icon-renovation:before{content:\"\\be250\"}.icon-update:before{content:\"\\be255\"}.icon-recycling:before{content:\"\\be260\"}.icon-upload:before{content:\"\\be270\"}.icon-download:before{content:\"\\be280\"}.icon-sign-off:before{content:\"\\be290\"}.icon-sign-in:before{content:\"\\be300\"}.icon-share:before{content:\"\\be310\"}.icon-input:before{content:\"\\be320\"}.icon-enter-fullscreen:before{content:\"\\be330\"}.icon-exit-fullscreen:before{content:\"\\be340\"}.icon-strategy:before{content:\"\\be350\"}.icon-sprint:before{content:\"\\be360\"}.icon-return:before{content:\"\\be370\"}.icon-shuffle:before{content:\"\\be380\"}.icon-chevrons-up-down:before{content:\"\\be390\"}.icon-drag:before{content:\"\\be391\"}.icon-chevron-backward:before{content:\"\\be400\"}.icon-chevron-forward:before{content:\"\\be401\"}.icon-double-arrow:before{content:\"\\be402\"}.icon-double-arrow-2:before{content:\"\\be403\"}.icon-circle-account-user:before{content:\"\\ca010\"}.icon-circle-account-add-user:before{content:\"\\ca015\"}.icon-account-user:before{content:\"\\ca020\"}.icon-become-new-client:before{content:\"\\ca030\"}.icon-benefitiary:before{content:\"\\ca040\"}.icon-change-beneficiary:before{content:\"\\ca050\"}.icon-fatca:before{content:\"\\ca060\"}.icon-investor-profile:before{content:\"\\ca061\"}.icon-personal-protection:before{content:\"\\ca062\"}.icon-reactivate-user:before{content:\"\\ca063\"}.icon-disable-user:before{content:\"\\ca064\"}.icon-remove-profile:before{content:\"\\ca065\"}.icon-remove-adding-profile:before{content:\"\\ca066\"}.icon-edit-profile:before{content:\"\\ca067\"}.icon-scrum-master:before{content:\"\\ca070\"}.icon-employees:before{content:\"\\ca080\"}.icon-clients:before{content:\"\\ca090\"}.icon-refer-a-friend:before{content:\"\\ca100\"}.icon-account-people:before{content:\"\\ca110\"}.icon-personal-manager:before{content:\"\\ca120\"}.icon-retirement-plan-elderly:before{content:\"\\ca130\"}.icon-bathroom:before{content:\"\\ca140\"}.icon-team-managament:before{content:\"\\ca150\"}.icon-shareholders:before{content:\"\\ca160\"}.icon-management:before{content:\"\\ca170\"}.icon-team-together:before{content:\"\\ca180\"}.icon-team-interaction:before{content:\"\\ca190\"}.icon-family:before{content:\"\\ca200\"}.icon-wheelchair-accessibility:before{content:\"\\ca210\"}.icon-emoji-kiss:before{content:\"\\ca220\"}.icon-emoji-very-happy:before{content:\"\\ca225\"}.icon-emoji-happy:before{content:\"\\ca230\"}.icon-emoji-neutral:before{content:\"\\ca240\"}.icon-emoji-reised-eyebrow:before{content:\"\\ca250\"}.icon-emoji-sad:before{content:\"\\ca260\"}.icon-emoji-angry:before{content:\"\\ca270\"}.icon-management-health:before{content:\"\\ca280\"}.icon-accessibility:before{content:\"\\ca290\"}.icon-wear-a-face-mask:before{content:\"\\ca300\"}.icon-keep-your-distance:before{content:\"\\ca310\"}.icon-stay-home:before{content:\"\\ca320\"}.icon-wait-outside-the-branch:before{content:\"\\ca330\"}.icon-marternity:before{content:\"\\ca340\"}.icon-academy:before{content:\"\\ca350\"}.icon-woman:before{content:\"\\ca360\"}.icon-pregnant-woman:before{content:\"\\ca370\"}.icon-help-us-to-improve:before{content:\"\\cb010\"}.icon-dislike:before{content:\"\\cb011\"}.icon-associations:before{content:\"\\cb020\"}.icon-credit:before{content:\"\\cb021\"}.icon-mortgage:before{content:\"\\cb022\"}.icon-handqr:before{content:\"\\cb023\"}.icon-life-to-your-mesure:before{content:\"\\cb024\"}.icon-loan:before{content:\"\\cb025\"}.icon-financing:before{content:\"\\cb030\"}.icon-renting-home:before{content:\"\\cb040\"}.icon-sustainable-services:before{content:\"\\cb050\"}.icon-short-term-financing:before{content:\"\\cb060\"}.icon-medium-long-term-financing:before{content:\"\\cb070\"}.icon-international-financing:before{content:\"\\cb080\"}.icon-productowner:before{content:\"\\cb090\"}.icon-technological-renting:before{content:\"\\cb100\"}.icon-financing-insurance:before{content:\"\\cb101\"}.icon-deal-handshake:before{content:\"\\cb110\"}.icon-renegotiate:before{content:\"\\cb120\"}.icon-suppliers:before{content:\"\\cb121\"}.icon-finger:before{content:\"\\cb130\"}.icon-tap:before{content:\"\\cb140\"}.icon-two-tap:before{content:\"\\cb150\"}.icon-double-tap:before{content:\"\\cb160\"}.icon-two-double-tap:before{content:\"\\cb170\"}.icon-pinch:before{content:\"\\cb180\"}.icon-swipe-up:before{content:\"\\cb190\"}.icon-swipe-right:before{content:\"\\cb200\"}.icon-swipe-down:before{content:\"\\cb210\"}.icon-swipe-left:before{content:\"\\cb220\"}.icon-tutorial:before{content:\"\\cb230\"}.icon-enter-pin:before{content:\"\\cb240\"}.icon-sign-language:before{content:\"\\cb250\"}.icon-wash-your-hands:before{content:\"\\cb260\"}.icon-infringements:before{content:\"\\cb270\"}.icon-investment:before{content:\"\\cc010\"}.icon-investment-small-caps:before{content:\"\\cc020\"}.icon-commodities:before{content:\"\\cc030\"}.icon-investment-team:before{content:\"\\cc040\"}.icon-lake:before{content:\"\\cc050\"}.icon-phising:before{content:\"\\cc060\"}.icon-bug:before{content:\"\\cc070\"}.icon-ant:before{content:\"\\cc080\"}.icon-petty-cash:before{content:\"\\cc090\"}.icon-owl:before{content:\"\\cc100\"}.icon-income-taxes:before{content:\"\\cc110\"}.icon-unicorn:before{content:\"\\cc120\"}.icon-fire:before{content:\"\\cc130\"}.icon-water-drop:before{content:\"\\cc140\"}.icon-snowflake:before{content:\"\\cc150\"}.icon-lightening:before{content:\"\\cc160\"}.icon-gale:before{content:\"\\cc170\"}.icon-moon:before{content:\"\\cc180\"}.icon-sunny:before{content:\"\\cc190\"}.icon-sun-and-cloud:before{content:\"\\cc200\"}.icon-rain:before{content:\"\\cc210\"}.icon-fog:before{content:\"\\cc220\"}.icon-moon-and-cloud:before{content:\"\\cc230\"}.icon-rain-shower:before{content:\"\\cc240\"}.icon-snow:before{content:\"\\cc250\"}.icon-cloudy:before{content:\"\\cc260\"}.icon-sky:before{content:\"\\cc270\"}.icon-gold:before{content:\"\\cc280\"}.icon-dynamics:before{content:\"\\cc290\"}.icon-scrum:before{content:\"\\d0010\"}.icon-soap:before{content:\"\\d0011\"}.icon-agile:before{content:\"\\d0020\"}.icon-sprint-review:before{content:\"\\d0030\"}.icon-cardboard-box:before{content:\"\\d0040\"}.icon-product-delivery:before{content:\"\\d0050\"}.icon-agile-coach:before{content:\"\\d0060\"}.icon-agile-coach-2:before{content:\"\\d0070\"}.icon-key:before{content:\"\\d0080\"}.icon-operability-level:before{content:\"\\d0090\"}.icon-screwdriver:before{content:\"\\d0100\"}.icon-nail:before{content:\"\\d0110\"}.icon-nut:before{content:\"\\d0120\"}.icon-brush:before{content:\"\\d0130\"}.icon-hammer:before{content:\"\\d0140\"}.icon-agriculture-workers:before{content:\"\\d0150\"}.icon-industry-workers:before{content:\"\\d0160\"}.icon-torch:before{content:\"\\d0170\"}.icon-magnet:before{content:\"\\d0180\"}.icon-lamp:before{content:\"\\d0190\"}.icon-life-saver:before{content:\"\\d0200\"}.icon-pin:before{content:\"\\d0210\"}.icon-tampon:before{content:\"\\d0220\"}.icon-medal:before{content:\"\\d0230\"}.icon-awards:before{content:\"\\d0240\"}.icon-trophy:before{content:\"\\d0250\"}.icon-champions-league:before{content:\"\\d0260\"}.icon-king:before{content:\"\\d0270\"}.icon-diamond:before{content:\"\\d0280\"}.icon-miscellaneous:before{content:\"\\d0290\"}.icon-estimation:before{content:\"\\d0300\"}.icon-dice:before{content:\"\\d0310\"}.icon-puzzle:before{content:\"\\d0320\"}.icon-control:before{content:\"\\d0330\"}.icon-retail:before{content:\"\\d0340\"}.icon-fashion:before{content:\"\\d0350\"}.icon-scales:before{content:\"\\d0360\"}.icon-idea:before{content:\"\\d0370\"}.icon-assisted-navigation:before{content:\"\\d0380\"}.icon-insurance:before{content:\"\\d0390\"}.icon-bell:before{content:\"\\d0400\"}.icon-bell-fill:before{content:\"\\d0401\"}.icon-time:before{content:\"\\d0410\"}.icon-clip:before{content:\"\\d0420\"}.icon-accelerator:before{content:\"\\d0430\"}.icon-maternity:before{content:\"\\d0440\"}.icon-children:before{content:\"\\d0450\"}.icon-gift:before{content:\"\\d0460\"}.icon-death:before{content:\"\\d0470\"}.icon-fragile:before{content:\"\\d0480\"}.icon-velocity:before{content:\"\\d0490\"}.icon-boosts:before{content:\"\\d0495\"}.icon-retrospective:before{content:\"\\d0500\"}.icon-liquidation:before{content:\"\\d0510\"}.icon-reports:before{content:\"\\d0520\"}.icon-chat-bot:before{content:\"\\d0530\"}.icon-deposits:before{content:\"\\d0540\"}.icon-taxes:before{content:\"\\d0550\"}.icon-maintenance:before{content:\"\\d0560\"}.icon-restaurant-bar:before{content:\"\\d0570\"}.icon-university:before{content:\"\\d0580\"}.icon-training:before{content:\"\\d0590\"}.icon-soccer:before{content:\"\\d0610\"}.icon-sports:before{content:\"\\d0620\"}.icon-supermarket-cart:before{content:\"\\d0630\"}.icon-health-insurance:before{content:\"\\d0640\"}.icon-hair-stylist:before{content:\"\\d0650\"}.icon-bodybuilding:before{content:\"\\d0660\"}.icon-reforms-decorations:before{content:\"\\d0670\"}.icon-health-check:before{content:\"\\d0680\"}.icon-motor-sports:before{content:\"\\d0690\"}.icon-rackets-sports:before{content:\"\\d0700\"}.icon-golf:before{content:\"\\d0710\"}.icon-sports-risk:before{content:\"\\d0720\"}.icon-spa:before{content:\"\\d0730\"}.icon-yoga-relax:before{content:\"\\d0740\"}.icon-orthdontics:before{content:\"\\d0750\"}.icon-veterinary:before{content:\"\\d0760\"}.icon-clean:before{content:\"\\d0770\"}.icon-music:before{content:\"\\d0780\"}.icon-cinema:before{content:\"\\d0790\"}.icon-pacman-2:before{content:\"\\d0800\"}.icon-ghost-2:before{content:\"\\d0810\"}.icon-commerce:before{content:\"\\d0820\"}.icon-ecommerce:before{content:\"\\d0821\"}.icon-basket:before{content:\"\\d0825\"}.icon-terminal-code:before{content:\"\\d0830\"}.icon-ticket-movie:before{content:\"\\d0840\"}.icon-life-show:before{content:\"\\d0850\"}.icon-museum:before{content:\"\\d0860\"}.icon-radar:before{content:\"\\d0870\"}.icon-reform:before{content:\"\\d0880\"}.icon-party:before{content:\"\\d0890\"}.icon-camping-gas:before{content:\"\\d0900\"}.icon-bbq:before{content:\"\\d0910\"}.icon-bathroom-alt:before{content:\"\\d0920\"}.icon-shower:before{content:\"\\d0930\"}.icon-bath:before{content:\"\\d0940\"}.icon-appliances:before{content:\"\\d0950\"}.icon-bed:before{content:\"\\d0960\"}.icon-tailor:before{content:\"\\d0970\"}.icon-domestic-service:before{content:\"\\d0980\"}.icon-office-workers:before{content:\"\\d0990\"}.icon-student:before{content:\"\\d1000\"}.icon-doctor:before{content:\"\\d1010\"}.icon-auction:before{content:\"\\d1020\"}.icon-entertainment-leisure:before{content:\"\\d1030\"}.icon-carnivorous-food:before{content:\"\\d1050\"}.icon-nutritional:before{content:\"\\d1060\"}.icon-vegetarian-food:before{content:\"\\d1070\"}.icon-seafood:before{content:\"\\d1080\"}.icon-dirty:before{content:\"\\d1090\"}.icon-fishermen:before{content:\"\\d1100\"}.icon-furniture:before{content:\"\\d1110\"}.icon-chair:before{content:\"\\d1111\"}.icon-ribbon:before{content:\"\\d1120\"}.icon-cancer:before{content:\"\\d1121\"}.icon-glasses:before{content:\"\\d1122\"}.icon-hide-glasses:before{content:\"\\d1123\"}.icon-mountains:before{content:\"\\ea010\"}.icon-countryside:before{content:\"\\ea020\"}.icon-lake-2:before{content:\"\\ea030\"}.icon-beach:before{content:\"\\ea040\"}.icon-building:before{content:\"\\ea050\"}.icon-city:before{content:\"\\ea060\"}.icon-factory:before{content:\"\\ea070\"}.icon-factory-net-zero-carbon-emissions:before{content:\"\\ea071\"}.icon-hospital:before{content:\"\\ea080\"}.icon-business-store:before{content:\"\\ea090\"}.icon-local-commerce:before{content:\"\\ea095\"}.icon-business-alert:before{content:\"\\ea100\"}.icon-business-support:before{content:\"\\ea105\"}.icon-home:before{content:\"\\ea110\"}.icon-remote-work:before{content:\"\\ea111\"}.icon-home-alert:before{content:\"\\ea112\"}.icon-franchise:before{content:\"\\ea120\"}.icon-international:before{content:\"\\ea130\"}.icon-foreign-trade:before{content:\"\\ea140\"}.icon-location:before{content:\"\\ea150\"}.icon-location-active:before{content:\"\\ea160\"}.icon-dealership:before{content:\"\\ea170\"}.icon-lighthouse:before{content:\"\\ea180\"}.icon-place:before{content:\"\\ea190\"}.icon-inspection:before{content:\"\\ea200\"}.icon-company-radar:before{content:\"\\ea210\"}.icon-housing:before{content:\"\\ea220\"}.icon-realestatecredit:before{content:\"\\ea230\"}.icon-realestatevalue:before{content:\"\\ea240\"}.icon-renting-car:before{content:\"\\eb010\"}.icon-electric-car:before{content:\"\\eb020\"}.icon-ambulance:before{content:\"\\eb030\"}.icon-agribusiness:before{content:\"\\eb040\"}.icon-sinister-car:before{content:\"\\eb050\"}.icon-tow-truck:before{content:\"\\eb060\"}.icon-truck:before{content:\"\\eb065\"}.icon-public-transportation:before{content:\"\\eb070\"}.icon-bike:before{content:\"\\eb080\"}.icon-electric-bike:before{content:\"\\eb090\"}.icon-motorbike:before{content:\"\\eb100\"}.icon-delivery:before{content:\"\\eb110\"}.icon-train:before{content:\"\\eb120\"}.icon-subway:before{content:\"\\eb130\"}.icon-plane:before{content:\"\\eb140\"}.icon-travel:before{content:\"\\eb150\"}.icon-entrepreneurship:before{content:\"\\eb160\"}.icon-boat-trip:before{content:\"\\eb170\"}.icon-luggage:before{content:\"\\eb180\"}.icon-gas-station:before{content:\"\\eb190\"}.icon-highway:before{content:\"\\eb200\"}.icon-multicars:before{content:\"\\eb300\"}.icon-doors:before{content:\"\\eb320\"}.icon-engine:before{content:\"\\eb330\"}.icon-fuel-engine:before{content:\"\\eb331\"}.icon-electric-engine:before{content:\"\\eb332\"}.icon-engine-breakdown:before{content:\"\\eb333\"}.icon-transmission:before{content:\"\\eb340\"}.icon-glass-repair:before{content:\"\\eb350\"}.icon-blackbox:before{content:\"\\eb360\"}.icon-fuel-card:before{content:\"\\eb370\"}.icon-electric-card:before{content:\"\\eb371\"}.icon-plugin-hybrid:before{content:\"\\eb380\"}.icon-sustainable-car:before{content:\"\\eb381\"}.icon-pickup-car:before{content:\"\\eb390\"}.icon-replacement-car:before{content:\"\\eb400\"}.icon-traffic-crash:before{content:\"\\eb410\"}.icon-car-seat:before{content:\"\\eb420\"}.icon-tires:before{content:\"\\eb430\"}.icon-flat-tire:before{content:\"\\eb431\"}.icon-tire-replace:before{content:\"\\eb432\"}.icon-sos:before{content:\"\\eb440\"}.icon-co2:before{content:\"\\eb450\"}.icon-license-plate:before{content:\"\\eb460\"}.icon-car-taxes:before{content:\"\\eb470\"}.icon-garages:before{content:\"\\eb480\"}.icon-car-inspection:before{content:\"\\eb490\"}.icon-itv:before{content:\"\\eb491\"}.icon-commercial-vehicle:before{content:\"\\eb500\"}.icon-vehicle-widht:before{content:\"\\eb510\"}.icon-vehicle-height:before{content:\"\\eb520\"}.icon-vehicle-weight:before{content:\"\\eb530\"}.icon-load-vehicle-weight:before{content:\"\\eb540\"}.icon-vehicle-type:before{content:\"\\eb550\"}.icon-road:before{content:\"\\eb560\"}.icon-curve-road:before{content:\"\\eb570\"}.icon-speeches:before{content:\"\\fa010\"}.icon-help:before{content:\"\\fa020\"}.icon-help-2px:before{content:\"\\fa021\"}.icon-no-messages:before{content:\"\\fa030\"}.icon-videochat:before{content:\"\\fa040\"}.icon-chat:before{content:\"\\fa050\"}.icon-global-chat:before{content:\"\\fa051\"}.icon-videoconference:before{content:\"\\fa060\"}.icon-inbox:before{content:\"\\fa070\"}.icon-email:before{content:\"\\fa080\"}.icon-email-2px:before{content:\"\\fa081\"}.icon-communication-message:before{content:\"\\fa090\"}.icon-email-support:before{content:\"\\fa091\"}.icon-send:before{content:\"\\fa100\"}.icon-phone:before{content:\"\\fa110\"}.icon-call-support:before{content:\"\\fa120\"}.icon-phone-24h:before{content:\"\\fa130\"}.icon-phone-call:before{content:\"\\fa140\"}.icon-whatsapp:before{content:\"\\fa150\"}.icon-trade-whatsapp:before{content:\"\\fa160\"}.icon-phone-support:before{content:\"\\fa180\"}.icon-call-center-db:before{content:\"\\fa190\"}.icon-communication-announcement:before{content:\"\\fa200\"}.icon-notification-settings:before{content:\"\\fa210\"}.calendar-hidden{max-height:0;opacity:0;transition:opacity .6s linear}.calendar-show{max-height:100%;opacity:1;visibility:visible}.air-datepicker-cell.-day-.-other-month-,.air-datepicker-cell.-year-.-other-decade-{color:var(--adp-color-other-month)}.air-datepicker-cell.-day-.-other-month-:hover,.air-datepicker-cell.-year-.-other-decade-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-,.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-day-.-other-month-,.-selected-.air-datepicker-cell.-year-.-other-decade-{background:var(--adp-background-color-selected-other-month);color:#fff}.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-,.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-day-.-other-month-,.-in-range-.air-datepicker-cell.-year-.-other-decade-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-,.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-day-.-other-month-:empty,.air-datepicker-cell.-year-.-other-decade-:empty{background:none;border:none}.air-datepicker-cell{align-items:center;border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;position:relative;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgb(18 114 119/var(--tw-border-opacity,1));border-width:1px;color:var(--adp-color-current-date);color:rgb(34 34 34/var(--tw-text-opacity,1))}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{background-color:unset!important;border:unset!important;color:var(--adp-color-disabled)!important;cursor:not-allowed}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{background:unset!important;color:var(--adp-color-disabled)!important}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-.-focus-,.air-datepicker-cell.-in-range-:hover{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-in-range-.-min-date-,.air-datepicker-cell.-range-from-{background-color:var(--adp-cell-background-color-in-range);border:1px solid var(--adp-cell-border-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-in-range-.-max-date-,.air-datepicker-cell.-range-to-{background-color:var(--adp-cell-background-color-in-range);border:1px solid var(--adp-cell-border-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{background:var(--adp-cell-background-color-selected);border:none;color:#fff}.air-datepicker-cell.-selected-.-current-{--tw-text-opacity:1;background:var(--adp-cell-background-color-selected);color:#fff;color:rgb(255 255 255/var(--tw-text-opacity,1))}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7,var(--adp-day-cell-width));grid-template-rows:40px;margin:8px 0 3px}.air-datepicker-body--day-name{align-items:center;color:var(--adp-day-name-color);display:flex;flex:1;font-size:.8em;font-size:.875rem;justify-content:center;line-height:1.25rem;text-align:center;text-transform:uppercase}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-auto-rows:var(--adp-day-cell-height);grid-template-columns:repeat(7,var(--adp-day-cell-width))}.air-datepicker-body--cells.-months-{grid-auto-rows:var(--adp-month-cell-height);grid-template-columns:repeat(3,1fr)}.air-datepicker-body--cells.-years-{grid-auto-rows:var(--adp-year-cell-height);grid-template-columns:repeat(4,1fr)}.air-datepicker-nav{border-bottom:1px var(--adp-border-color-inner);border-style:none;box-sizing:content-box;display:flex;justify-content:space-between;min-height:var(--adp-nav-height);padding:var(--adp-padding)}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--action,.air-datepicker-nav--title{align-items:center;cursor:pointer;display:flex;justify-content:center}.air-datepicker-nav--action{border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--adp-nav-action-size)}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{height:32px;width:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{--tw-text-opacity:1;border-radius:var(--adp-border-radius);color:rgb(34 34 34/var(--tw-text-opacity,1));font-size:1rem;line-height:1.5rem;padding:0 8px}.air-datepicker-nav--title i{color:var(--adp-nav-color-secondary);font-style:normal;margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{background:none;cursor:default}.air-datepicker-buttons{align-items:center;display:grid;display:flex;grid-auto-columns:1fr;grid-auto-flow:column;justify-content:space-between}.air-datepicker-button{align-items:center;background:hsla(0,0%,100%,0);border:none;border-radius:var(--adp-btn-border-radius);border-radius:9999px;color:var(--adp-btn-color);cursor:pointer;display:inline-flex;font-weight:700;height:var(--adp-btn-height);justify-content:center;padding:.75rem 1.25rem;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.air-datepicker-button:focus,.air-datepicker-button:hover{background:var(--adp-btn-background-color-hover);color:var(--adp-btn-color-hover)}.air-datepicker-button:focus{outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{align-items:center;display:flex;height:100%;justify-content:center;outline:none;width:100%}.air-datepicker-time{grid-column-gap:12px;align-items:center;display:grid;grid-template-columns:max-content 1fr;padding:0 var(--adp-time-padding-inner);position:relative}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{align-items:center;display:flex;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{line-height:1;margin:0 2px 3px}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{font-family:Century Gothic,CenturyGothic,AppleGothic,sans-serif;font-size:19px;line-height:1;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);bottom:-2px;content:\"\";left:-2px;opacity:0;position:absolute;right:-2px;top:-3px;z-index:-1}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{align-self:flex-end;color:var(--adp-time-day-period-color);font-size:11px;margin-bottom:1px;margin-left:6px;text-transform:uppercase}.air-datepicker-time--row{align-items:center;background:linear-gradient(to right,var(--adp-time-track-color),var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat;display:flex;font-size:11px;height:17px}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{-webkit-appearance:none;background:none;cursor:pointer;flex:1;height:100%;margin:0;padding:0;width:100%}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;border:1px solid var(--adp-time-track-color);border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;margin-top:calc(var(--adp-time-thumb-size)/2*-1);-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration);width:12px}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{background:#fff;border:1px solid var(--adp-time-track-color);border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration);width:12px}.air-datepicker-time--row input[type=range]::-ms-thumb{background:#fff;border:1px solid var(--adp-time-track-color);border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration);width:12px}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{background:transparent;border:none;color:transparent;cursor:pointer;height:var(--adp-time-track-height)}.air-datepicker-time--row input[type=range]::-moz-range-track{background:transparent;border:none;color:transparent;cursor:pointer;height:var(--adp-time-track-height)}.air-datepicker-time--row input[type=range]::-ms-track{background:transparent;border:none;color:transparent;cursor:pointer;height:var(--adp-time-track-height)}.air-datepicker-time--row input[type=range]::-ms-fill-lower,.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:transparent}.air-datepicker{--adp-font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--adp-font-size:14px;--adp-width:246px;--adp-z-index:100;--adp-padding:4px;--adp-grid-areas:\"nav\" \"body\" \"timepicker\" \"buttons\";--adp-transition-duration:0.3s;--adp-transition-ease:ease-out;--adp-transition-offset:8px;--adp-background-color:#fff;--adp-background-color-hover:#f0f0f0;--adp-background-color-active:#eaeaea;--adp-background-color-in-range:rgba(92,196,239,.1);--adp-background-color-in-range-focused:rgba(92,196,239,.2);--adp-background-color-selected-other-month-focused:#8ad5f4;--adp-background-color-selected-other-month:#a2ddf6;--adp-color:#4a4a4a;--adp-color-secondary:#9c9c9c;--adp-accent-color:#4eb5e6;--adp-color-current-date:var(--adp-accent-color);--adp-color-other-month:#dedede;--adp-color-disabled:#aeaeae;--adp-color-disabled-in-range:#939393;--adp-color-other-month-hover:#c5c5c5;--adp-border-color:#dbdbdb;--adp-border-color-inner:#efefef;--adp-border-radius:4px;--adp-border-color-inline:#d7d7d7;--adp-nav-height:32px;--adp-nav-arrow-color:var(--adp-color-secondary);--adp-nav-action-size:32px;--adp-nav-color-secondary:var(--adp-color-secondary);--adp-day-name-color:#ff9a19;--adp-day-name-color-hover:#8ad5f4;--adp-day-cell-width:1fr;--adp-day-cell-height:32px;--adp-month-cell-height:42px;--adp-year-cell-height:56px;--adp-pointer-size:10px;--adp-poiner-border-radius:2px;--adp-pointer-offset:14px;--adp-cell-border-radius:4px;--adp-cell-background-color-hover:var(--adp-background-color-hover);--adp-cell-background-color-selected:#5cc4ef;--adp-cell-background-color-selected-hover:#45bced;--adp-cell-background-color-in-range:rgba(92,196,239,.1);--adp-cell-background-color-in-range-hover:rgba(92,196,239,.2);--adp-cell-border-color-in-range:var(--adp-cell-background-color-selected);--adp-btn-height:32px;--adp-btn-color:var(--adp-accent-color);--adp-btn-color-hover:var(--adp-color);--adp-btn-border-radius:var(--adp-border-radius);--adp-btn-background-color-hover:var(--adp-background-color-hover);--adp-btn-background-color-active:var(--adp-background-color-active);--adp-time-track-height:1px;--adp-time-track-color:#dedede;--adp-time-track-color-hover:#b1b1b1;--adp-time-thumb-size:12px;--adp-time-padding-inner:10px;--adp-time-day-period-color:var(--adp-color-secondary);--adp-mobile-font-size:16px;--adp-mobile-nav-height:40px;--adp-mobile-width:320px;--adp-mobile-day-cell-height:38px;--adp-mobile-month-cell-height:48px;--adp-mobile-year-cell-height:64px;background:var(--adp-background-color);border:1px solid var(--adp-border-color);border-radius:var(--adp-border-radius);box-shadow:0 4px 12px rgba(0,0,0,.15);box-sizing:content-box;color:var(--adp-color);display:grid;font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);grid-template-areas:var(--adp-grid-areas);grid-template-columns:1fr;grid-template-rows:repeat(4,max-content);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);width:var(--adp-width);z-index:var(--adp-z-index)}.air-datepicker-overlay{--adp-overlay-background-color:rgba(0,0,0,.3);--adp-overlay-transition-duration:0.3s;--adp-overlay-transition-ease:ease-out;--adp-overlay-z-index:99;background:var(--adp-overlay-background-color);height:0;left:0;opacity:0;position:fixed;top:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);width:0;z-index:var(--adp-overlay-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset)*-1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset)*-1))}.air-datepicker.-active-:not(.-custom-position-){opacity:1;transform:translate(0)}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;left:auto;opacity:1;position:static;right:auto;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size:var(--adp-mobile-font-size);--adp-day-cell-height:var(--adp-mobile-day-cell-height);--adp-month-cell-height:var(--adp-mobile-month-cell-height);--adp-year-cell-height:var(--adp-mobile-year-cell-height);--adp-nav-height:var(--adp-mobile-nav-height);--adp-nav-action-size:var(--adp-mobile-nav-height);border:none;position:fixed;width:var(--adp-mobile-width)}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%,calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%,-50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{left:0;position:absolute;top:0}.air-datepicker--pointer{--pointer-half-size:calc(var(--adp-pointer-size)/2);display:none;z-index:-1}.air-datepicker--pointer,.air-datepicker--pointer:after{height:var(--adp-pointer-size);position:absolute;width:var(--adp-pointer-size)}.air-datepicker--pointer:after{background:#fff;border-right:1px solid var(--adp-border-color-inline);border-top:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);box-sizing:border-box;content:\"\"}.-top-center- .air-datepicker--pointer,.-top-left- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-center- .air-datepicker--pointer:after,.-top-left- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-bottom- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-bottom- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-top- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-center- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-center- .air-datepicker--pointer:after,.-bottom-left- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-bottom- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-top- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-bottom- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-top- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-bottom-left- .air-datepicker--pointer,.-top-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-bottom-right- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-bottom-center- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;grid-area:body;padding:var(--adp-padding);padding-top:0}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{border-top:1px solid var(--adp-border-color-inner);padding:var(--adp-padding)}.air-datepicker-overlay.-active-{height:100%;opacity:1;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s;width:100%}.css-calendar.air-datepicker{--adp-font-family:\"Santander Micro Text\",\"Roboto\",\"Helvetica\",\"Arial\",\"sans-serif\";--adp-width:100%;--adp-padding:16px;--adp-transition-offset:0px;--adp-background-color-hover:#f6f6f6;--adp-background-color-in-range:#137e8414;--adp-background-color-in-range-focused:#137e8414;--adp-background-color-selected-other-month-focused:#cedee7;--adp-background-color-selected-other-month:#cedee7;--adp-color:#222;--adp-color-secondary:#727272;--adp-accent-color:#127277;--adp-color-other-month:#2222223b;--adp-color-other-month-hover:#c5c5c5;--adp-border-color:#ccc;--adp-border-color-inner:#ccc;--adp-border-radius:4px;--adp-border-color-inline:#ccc;--adp-nav-arrow-color:var(--adp-accent-color);--adp-nav-color-secondary:var(--adp-color-secondary);--adp-day-name-color:var(--adp-color-secondary);--adp-day-name-color-hover:#127277;--adp-day-cell-height:40px;--adp-month-cell-height:40px;--adp-year-cell-height:40px;--adp-cell-border-radius:9999px;--adp-cell-background-color-selected:#127277;--adp-cell-background-color-selected-hover:#127277;--adp-cell-background-color-in-range:#137e8414;--adp-cell-background-color-in-range-hover:#137e8414;--adp-btn-height:48px;--tw-shadow:0 1px 10px 0 hsla(0,0%,64%,.4);--tw-shadow-colored:0 1px 10px 0 var(--tw-shadow-color);border-style:none;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);.air-datepicker-body--cells.-days-,.air-datepicker-body--cells.-months-,.air-datepicker-body--cells.-years-{row-gap:.25rem}.air-datepicker-button.air-datepicker-button--apply{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(236 0 0/var(--tw-bg-opacity,1));color:rgb(255 255 255/var(--tw-text-opacity,1));min-width:9rem}.air-datepicker-button.air-datepicker-button--apply:hover{--tw-bg-opacity:1;background-color:rgb(204 0 0/var(--tw-bg-opacity,1))}}.after\\:content-\\[\\'S\\/\\'\\]:after{--tw-content:\"S/\";content:var(--tw-content)}.hover\\:bg-primary-dark:hover{--tw-bg-opacity:1;background-color:rgb(204 0 0/var(--tw-bg-opacity,1))}.peer:checked~.peer-checked\\:after\\:content-\\[\\'\\$\\'\\]:after{--tw-content:\"$\";content:var(--tw-content)}.z-50{z-index:50}.mt-\\[10px\\]{margin-top:10px}.w-full{width:100%}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.gap-1{gap:.25rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-modal{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.text-dark\\/\\[0\\.23\\]{color:rgba(34,34,34,.23)}.text-error{--tw-text-opacity:1;color:rgb(153 0 0/var(--tw-text-opacity,1))}.text-info{--tw-text-opacity:1;color:rgb(35 119 154/var(--tw-text-opacity,1))}.text-soft{--tw-text-opacity:1;color:rgb(114 114 114/var(--tw-text-opacity,1))}.text-success{--tw-text-opacity:1;color:rgb(0 128 53/var(--tw-text-opacity,1))}.text-warning{--tw-text-opacity:1;color:rgb(133 99 0/var(--tw-text-opacity,1))}.pointer-events-none{pointer-events:none}.left-3{left:.75rem}.right-1{right:.25rem}.right-3{right:.75rem}.top-3{top:.75rem}.h-12{height:3rem}.h-6{height:1.5rem}.w-6{width:1.5rem}.gap-4{gap:1rem}.text-ellipsis{text-overflow:ellipsis}.rounded-\\[32px\\]{border-radius:32px}.rounded-lg{border-radius:.5rem}.border-alternative-dark{--tw-border-opacity:1;border-color:rgb(13 81 85/var(--tw-border-opacity,1))}.border-border-default{--tw-border-opacity:1;border-color:rgb(143 143 143/var(--tw-border-opacity,1))}.border-error{--tw-border-opacity:1;border-color:rgb(153 0 0/var(--tw-border-opacity,1))}.border-transparent{border-color:transparent}.bg-dark\\/\\[0\\.06\\]{background-color:rgba(34,34,34,.06)}.p-2{padding:.5rem}.p-3{padding:.75rem}.pl-12{padding-left:3rem}.pr-12{padding-right:3rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.leading-none{line-height:1}.text-alternative{--tw-text-opacity:1;color:rgb(18 114 119/var(--tw-text-opacity,1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.placeholder\\:text-soft::-moz-placeholder{--tw-text-opacity:1;color:rgb(114 114 114/var(--tw-text-opacity,1))}.placeholder\\:text-soft::placeholder{--tw-text-opacity:1;color:rgb(114 114 114/var(--tw-text-opacity,1))}.hover\\:border-dark:hover{--tw-border-opacity:1;border-color:rgb(34 34 34/var(--tw-border-opacity,1))}.focus\\:border-alternative:focus{--tw-border-opacity:1;border-color:rgb(18 114 119/var(--tw-border-opacity,1))}.focus\\:border-error:focus{--tw-border-opacity:1;border-color:rgb(153 0 0/var(--tw-border-opacity,1))}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:ring-alternative:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(18 114 119/var(--tw-ring-opacity,1))}.focus\\:ring-error:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(153 0 0/var(--tw-ring-opacity,1))}.focus\\:ring-transparent:focus{--tw-ring-color:transparent}.min-w-5{min-width:1.25rem}.-bottom-2{bottom:-.5rem}.-top-2{top:-.5rem}.bottom-\\[calc\\(100\\%\\+1rem\\)\\]{bottom:calc(100% + 1rem)}.left-0{left:0}.left-1\\/2{left:50%}.left-1\\/3{left:33.333333%}.right-0{right:0}.right-\\[10px\\]{right:10px}.top-\\[calc\\(100\\%\\+1rem\\)\\]{top:calc(100% + 1rem)}.top-auto{top:auto}.z-10{z-index:10}.mb-2{margin-bottom:.5rem}.h-4{height:1rem}.w-4{width:1rem}.w-72{width:18rem}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.rotate-45{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate:45deg}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.p-6{padding:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}@font-face{font-family:Santander Headline;font-style:normal;font-weight:300;src:url(assets/fonts/SantanderHeadlineLight.woff) format(\"woff\"),url(assets/fonts/SantanderHeadlineLight.woff2) format(\"woff2\")}@font-face{font-family:Santander Headline;font-style:normal;font-weight:400;src:url(assets/fonts/SantanderHeadline-Regular.woff) format(\"woff\"),url(assets/fonts/SantanderHeadline-Regular.woff2) format(\"woff2\")}@font-face{font-family:Santander Headline;font-style:normal;font-weight:700;src:url(assets/fonts/SantanderHeadline-Bold.woff) format(\"woff\"),url(assets/fonts/SantanderHeadline-Bold.woff2) format(\"woff2\")}@font-face{font-family:Santander Micro Text;font-style:normal;font-weight:300;src:url(assets/fonts/SantanderMicroText-Lt.woff) format(\"woff\"),url(assets/fonts/SantanderMicroText-Lt.woff2) format(\"woff2\")}@font-face{font-family:Santander Micro Text;font-style:normal;font-weight:400;src:url(assets/fonts/SantanderMicroText.woff) format(\"woff\"),url(assets/fonts/SantanderMicroText.woff2) format(\"woff2\")}@font-face{font-family:Santander Micro Text;font-style:normal;font-weight:700;src:url(assets/fonts/SantanderMicroText-Bd.woff) format(\"woff\"),url(assets/fonts/SantanderMicroText-Bd.woff2) format(\"woff2\")}@font-face{font-family:SantanderIcons;src:url(assets/fonts/SantanderIcons/SantanderIcons.eot);src:url(assets/fonts/SantanderIcons/SantanderIcons.eot?#iefix) format(\"embedded-opentype\"),url(assets/fonts/SantanderIcons/SantanderIcons.ttf) format(\"truetype\"),url(assets/fonts/SantanderIcons/SantanderIcons.svg#SantanderIcons) format(\"svg\"),url(assets/fonts/SantanderIcons/SantanderIcons.woff) format(\"woff\"),url(assets/fonts/SantanderIcons/SantanderIcons.woff2) format(\"woff2\")}.group:hover .group-hover\\:block{display:block}@media (min-width:1024px){.lg\\:-left-10{left:-2.5rem}.lg\\:-left-2{left:-.5rem}.lg\\:-right-10{right:-2.5rem}.lg\\:-top-4{top:-1rem}.lg\\:bottom-auto{bottom:auto}.lg\\:left-10{left:2.5rem}.lg\\:left-\\[calc\\(100\\%\\+1rem\\)\\]{left:calc(100% + 1rem)}.lg\\:left-auto{left:auto}.lg\\:right-10{right:2.5rem}.lg\\:top-8{top:2rem}.lg\\:translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}";

const StdCalendar$1 = /*@__PURE__*/ proxyCustomElement(class StdCalendar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.changeCalendar = createEvent(this, "changeCalendar", 7);
        this.blurEvent = createEvent(this, "blurEvent", 3);
        this.invalidRange = createEvent(this, "invalidRange", 7);
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
        this.airDatepickerInstance = new AirDatepicker$1(this.calendarMenu, {
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
            locale: es,
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
    static get style() { return stdCalendarCss; }
}, [1, "std-calendar", {
        "minDate": [8, "min-date"],
        "maxDate": [8, "max-date"],
        "maxRangeDays": [2, "max-range-days"],
        "buttonLabelOk": [1, "button-label-ok"],
        "buttonLabelClear": [1, "button-label-clear"],
        "range": [4],
        "disabledAsReadonly": [4, "disabled-as-readonly"],
        "disabled": [4],
        "readonly": [4],
        "helperText": [1, "helper-text"],
        "status": [1],
        "placeholder": [1],
        "label": [1],
        "isPositionAbsolute": [4, "is-position-absolute"],
        "classesContainer": [1, "classes-container"],
        "showCalendar": [32],
        "startDate": [32],
        "endDate": [32],
        "selectedDates": [32],
        "reset": [64],
        "onSelected": [64],
        "setRange": [64],
        "setDate": [64]
    }, [[4, "click", "checkForClickOutside"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["std-calendar", "std-helpertext", "std-input", "std-support-icons", "std-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "std-calendar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, StdCalendar$1);
            }
            break;
        case "std-helpertext":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "std-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "std-support-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "std-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const StdCalendar = StdCalendar$1;
const defineCustomElement = defineCustomElement$1;

export { StdCalendar, defineCustomElement };
//# sourceMappingURL=std-calendar.js.map

//# sourceMappingURL=std-calendar.js.map
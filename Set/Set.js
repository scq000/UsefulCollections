/*
 * 集合类型数据，不可重复
 * @author: scq000
 */
function Set(arr) {
    this.items = {};
    if (arr && (arr instanceof Array)) {
        arr.forEach(function(item) {
            this.items[getProp(item)] = item;
        }, this);
    }
}

Set.prototype = {
    has: function(value) {
        return this.items.hasOwnProperty(getProp(value));
    },

    add: function(value) {
        if (!this.has(value)) {
            this.items[getProp(value)] = value;
            return true;
        }
        return false;
    },

    delete: function(value) {
        if (this.has(value)) {
            delete this.items[getProp(value)];
            return true;
        }
        return false;
    },

    addMany: function(values) {
        for (var i = 0; i < values.length; i++) {
            this.add(values[i]);
        }
    },

    deleteMany: function(values) {
        for (var i = 0; i < values.length; i++) {
            this.delete(values[i]);
        }
    },

    clear: function() {
        this.items = {};
    },
    //根据条件过滤
    filter: function(fn) {
        for (var key in this.items) {
            if (!fn(this.items[key])) {
                this.delete(this.items[key]);
            }
        }
        return new Set(this.items);
    },

    size: function() {
        return Object.keys(this.items).length;
    },

    //返回由value组成的数组
    values: function() {
        var result = [];

        for (var key in this.items) {
            result.push(this.items[key]);
        }

        return result;
    }
}

function getProp(value) {
    return JSON.stringify(value, Object.keys(value).sort());
}

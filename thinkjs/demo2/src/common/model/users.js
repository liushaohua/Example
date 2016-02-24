'use strict';
/**
 * model
 */
export default class extends think.model.base {
    async login(map) {
        map.password = think.md5(map.password);
        let data = await this.where(map).select();console.log(data);
        if (think.isEmpty(data)) {console.log('woaininidd');
            return false;
        }
        return true;
    }

    async reg(data) {
        let hasName = await this.where({'user':data.user}).select(),
            rs = false;
        if (think.isEmpty(hasName)) {
            rs = await this.add(data);
        } else {
            rs = await this.where({'user':data.user}).update(data);
        }

        if (rs) {
            return true;
        }

        return false;
    }
}

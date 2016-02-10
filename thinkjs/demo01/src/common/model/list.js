'use strict';
/**
 * model
 */
export default class extends think.model.base {
	async getList() {
		let data = await this.field("id,user_id,user_name,text,date").order('id DESC').select();
		return data;
	}
	
	async addList(d) {
		await this.add(d);
	}
	
	async delete_list(data) {
		await this.where({id:data}).delete();
	}
}
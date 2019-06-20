package com.pinyougou.sellergoods.service;

import java.util.List;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;

/**
 * 品牌接口
 * @author Administrator
 *
 */
public interface BrandService {

	public List<TbBrand> findAll();
	
	public PageResult findPage(int pageNum,int pageSize);
	
	public void add(TbBrand brand);
	public void update(TbBrand brand);//修改
	public TbBrand findOne(Long id);//获取id
	public void delete(Long [] ids);
	public PageResult findPage(TbBrand brand,int pageNum,int pageSize);
}



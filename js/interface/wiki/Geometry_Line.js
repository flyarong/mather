/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Line']=Kx(


detail('线的类型',Table([ZLR('名称 记法 定义 性质')],[
	
	
	ZLR('直线\nStraight________','','____'),
	ZLR('曲线\nCurve________','','____'),
	ZLR('弧线\nArc________','','____'),
	
	ZLR('弦\nChord________圆上两点连线____最大的弦是直径','','____'),
	
	ZLR('延长线\nExtension________','','____'),
	ZLR('平分线\nBisector________','','____'),
	ZLR('过顶点的周长平分线\nSplitter________三角形一个顶点与对边上一点（等分周长）的连线____3条过顶点的周长平分线共点于'+kxf('Nagel')+'点','','____'),
	ZLR('过中点的周长平分线\nCleaver________三角形一条边中点与其它边上一点（等分周长）的连线____'+kul([
		'3条过中点的周长平分线共点于'+kxf('Spieker')+'圆心',
		'（中位三角形内切圆的圆心）']),'','____'),

	ZLR('边\nSide________','','____'),


	ZLR('斜边\nHypotenuse________直角三角形直角的对边','','____'),
	ZLR('对边\nOpposite________三角形一个角的对边','','____'),
	ZLR('邻边\nAdjacent________三角形一个角所在的一条边','','____'),

	ZLR('中线\nMedian________三角形的一个顶点与对边中点的连线','','____'),
	
	ZLR('垂线\nPerpendicular________与边垂直的线','','____'),
	ZLR('高（高线）\nAltitude________经过顶点的垂线____','','____'),
	ZLR('中垂线\nPerpendicular bisector________经过中点的垂线','','____'),
		
	ZLR('对称中线\nSymmedian________三角形中与中线对称（以角平分线为对称轴）的线，','','____'),
	

	ZLR('角平分线\nAngle Bisector________平分一个角的线（过三角形一个顶点）','','____'),

	ZLR('周长平分线\nPerimeter Bisector________'+khrA(['平分三角形周长的线',
		'其中过三角形一个顶点的称为'+kxf('Splitter'),
		'过三角形一条边中点的称为'+kxf('Cleaver')]),'','____'),

	ZLR('面积平分线\nArea Bisector________平分三角形面积的线','','____'),

	ZLR('对角线\nDiagonal________对角顶点的连线','','____'),
	ZLR('中位线\nMidline\nMidsegment________三角形两边中点的连线','','____'),
		
	ZLR('欧拉线\nEuler\'s line________重心G、垂心H、外心O三点的共线____'+kul([
		'九点圆心N也在欧拉线上',
		'内心I一般不在欧拉线上',

		]),'','____'),
		
	ZLR('Nagel线\n________重心G、'+kxf('Nagel')+'点、内心I三点的共线____','','____'),
		
		

],'wiki').replace(/\n/g,br))+
detail('线的二元关系',Table([ZLR('名称 记法 定义 性质')],[

	ZLR('共点\n交于一点\nConcur\nBe Concurrent with________几条线交于一点____'+kul([
		'二维世界，共点的对偶是共线',
		'三维世界，共点的对偶是共面',
		'三角形3条高，共点于垂心H',
		'三角形3条角平分线，共点于内心I',
		'三角形3条中线，共点于中心G',
		'三角形3条中垂线，共点于外心O',
		'三角形1条内角平分线，与另两个内角的外角平分线，共点于旁心E',
		'三角形1条中线，与2条分别平行于另两边，且平分面积的线共点于中心G',
		'三角形有1,2或3条既平分面积又平分周长的线，且这些线共点于内心I',
		
		kxA(['三角形及与其共两个顶点且内心是第3个顶点的3个三角形，',
			'这4个三角形的欧拉线共点于'+kxf('Schiffler')+'点']),
		
		kxA(['三角形3条顶点与外侧等边三角形',
			'（以对边为一边）新顶点连线共点于第一等心',
			'（三角形最大角不超过120°时，共点称为费马点）']),
		
		kxA(['一个圆与三角形3个外（旁）切圆均内切的3个切点',
			'与原三角形相应顶点的连线共点于'+kxf('Apollonius')+'点']),
		
		'偶数边数的正多边形对角线共点于中心I',
		
		'四边形两条中线（对边中点连线）与两对角线中点连线共点',
			
		
		'（椭）圆的所有周长平分线、面积平分线都共点于圆心',
		'圆上的弦的中垂线共点于圆心',
		'圆切线的垂线（垂足在切点）共点于圆心',
		
		
		]),'','____'),
	ZLR('平行\nBe Parallel to________','','____'),
	ZLR('垂直\nBe Pperpendicular to________','','____'),



],'wiki').replace(/\n/g,br))
);
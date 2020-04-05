$(function () {
	var $title = $(".title");
	var $menus = $(".menus");
	for (let index = 0; index < $title.length; index++) {
		$title.eq(index).click(function () {
			event.stopPropagation();
			if ($menus.eq(index).hasClass('active')) {
				$menus.eq(index).removeClass('active');
				$title.unbind('mouseover')
			} else {
				$menus.eq(index).addClass('active');
				for (let k = 0; k < $title.length; k++) {
					$title.eq(k).mouseover(() => {
						$menus.eq(k).addClass('active');
						for (let l = 0; l < $title.length; l++) {
							if (l != k && $menus.eq(k).hasClass('active')) {
								$menus.eq(l).removeClass('active');
							}
						}
					})
				}
				//取消显示其他二级菜单
				for (let j = 0; j < $title.length; j++) {
					if (j != index && $menus.eq(index).hasClass('active')) {
						$menus.eq(j).removeClass('active');
					}
				}
			}
		})
	}
	//点击其他位置取消显示二级菜单
	$('.notepad-editor').click(() => {
		$title.click(()=>{
			event.stopPropagation();
		})
		for (let index = 0; index < $title.length; index++) {
			if ($menus.eq(index).hasClass('active')) {
				$menus.eq(index).removeClass('active');
				$title.unbind('mouseover')
			}
		}
	})
})
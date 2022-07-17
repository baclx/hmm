document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

let products = [
    {
        name: 'Bộ chế tạo bột nặn có mùi hương',
        image1: './Images/giáo dục/11.jpg',
        image2: './Images/giáo dục/12.jpg',
        old_price: '529,000 VNĐ',
        curr_price: '265,000 VNĐ',
    },
    {
        name: 'Bộ thể thao ngoài trời 5 trong 1',
        image1: './Images/thể thao/Bộ thể thao ngoài trời 5 trong 1.jpg',
        image2: './Images/thể thao/Bộ thể thao ngoài trời 5 trong 11.jpg',
        old_price: '529,000 VNĐ',
        curr_price: '425,000 VNĐ',
    },
    {
        name: 'Tập tô màu – khám phá vũ trụ cùng mèo con',
        image1: './Images/giáo dục/21.jpg',
        image2: './Images/giáo dục/22.jpg',
        old_price: '59,000 VNĐ',
        curr_price: '39,000 VNĐ',
    },
    {
        name: 'Đồ chơi nha sĩ thú cưng',
        image1: './Images/mô phỏng/Đồ chơi nha sĩ thú cưng.jpg',
        image2: './Images/mô phỏng/Đồ chơi nha sĩ thú cưng1.jpg',
        old_price: '399,000 VNĐ',
        curr_price: '299,000 VNĐ',
    },
    {
        name: 'Máy Gắp Banh Hưu Cao Cổ',
        image1: './Images/mô phỏng/Máy Gắp Banh Hưu Cao Cổ.jpg',
        image2: './Images/mô phỏng/Máy Gắp Banh Hưu Cao Cổ1.jpg',
        old_price: '749,000 VNĐ',
        curr_price: '529,000 VNĐ',
    },
    {
        name: 'Ngôi nhà của búp bê Barbie',
        image1: './Images/mô phỏng/Ngôi nhà của búp bê Barbie.jpg',
        image2: './Images/mô phỏng/Ngôi nhà của búp bê Barbie1.jpg',
        old_price: '1,499,000 VNĐ',
        curr_price: '1,199,000 VNĐ',
    }
]

let products_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
    <div class="col-4 col-md-6 col-sm-12">
        <div class="product-card">
            <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
            </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Mua ngay</a>
                        <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    products_list.insertAdjacentHTML("beforeend", prod)
    });
}

renderProducts(products)

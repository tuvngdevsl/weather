import styles from "./TrinhTheoDoiDiUng.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

const TrinhTheoDoiDiUng = () => {
    return (
        <main>
            <section>
                <h1>Thông tin phấn hoa</h1>
                <p>Bạn có biết những loại phấn hoa làm các triệu chứng của bạn thêm nghiêm trọng không? Sau đây là viễn cảnh 3 ngày đối với những thủ phạm tồi tệ nhất.</p>
                <div className={cx('row')}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className={cx('column')}>
                            <img src="https://weather.com/allergy/assets/tree_particles.58f09c.png" alt="Hoa" />
                            <h2>Phấn hoa từ cây {item}</h2>
                            <p>Tối nay: Không có</p>
                            <p>Ngày mai: Không có</p>
                            <p>Thứ Bảy: Không có</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h1>Gợi ý giúp kiểm soát tình trạng dị ứng của bạn</h1>
                {[ 
                    { title: "Tắm rửa sau khi ở ngoài trời", desc: "Để loại bỏ lượng phấn hoa bám vào người khi bạn ở bên ngoài, hãy tắm rửa và thay quần áo.", img:"https://weather.com/allergy/assets/tip1.87f8af.png" },
                    { title: "Giảm thiểu phấn hoa trong nhà", desc: "Luôn đóng cửa sổ và sử dụng máy lạnh hoặc máy lọc HEPA để lọc tác nhân gây dị ứng.", img:"https://weather.com/allergy/assets/tip2.b7f0b3.png" },
                    { title: "Xem Thời tiết", desc: "Tìm hiểu khi nào những điều kiện như gió làm tăng lượng phấn hoa để bạn có thể chuẩn bị.", img: "https://weather.com/allergy/assets/tip3.bed52a.png" },
                    { title: "Biết rõ các lựa chọn giảm nhẹ tình trạng dị ứng của bạn", desc: "Hãy trao đổi với bác sĩ của bạn về các lựa chọn từ sử dụng thuốc đến bình xịt mũi.", img: "https://weather.com/allergy/assets/tip4.159080.png" }
                ].map((item, index) => (
                    <div key={index} className={cx('suggestion')}>
                        <div className={cx('suggestion-content')}>
                            <img src={item.img} alt={item.title} />
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default TrinhTheoDoiDiUng


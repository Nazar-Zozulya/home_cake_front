import styles from './block.module.css'

export function AboutUsBlock() {
    return (
        <div className={styles.container}>
            <img src="assets/images/aboutUs.jpg" className={styles.bg} alt="" />
            <div className={styles.content}>
                <img src="/assets/images/aboutUsAvatar.png" className={styles.avatar} alt="" />
                <p className={styles.quote}>``Lorem ipsum dolor sit amet consectetur. Varius netus vulputate ultricies tincidunt arcu sed et in gravida. Suspendisse faucibus cursus aliquam auctor adipiscing ac. Orci risus ullamcorper velit ut non. Vel viverra integer elit feugiat mattis mauris sapien. Habitant nisi in mauris lacus. Amet in enim nisi morbi cursus egestas suspendisse egestas.``</p>
            </div>
        </div>
    )
}
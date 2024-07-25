<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'S1kOh/P8.46<P  7pKDX>y:_55UR,<!*|mC0[iXC Q{sA)Sby&4fqFV~@Z|V(?}*' );
define( 'SECURE_AUTH_KEY',  ']Uv93GN^u[E!A ^[7~*u>jE)BSs2Xuw~{xXJ!tD%Th;>(y#q6:und9~xN8ubc/wY' );
define( 'LOGGED_IN_KEY',    '6LsUw^/k5wqq3p50Z<E&6:_Oo>pRu4`.v}(xz}Y r;uPV,`}M6r|5Z=O^{c$l^;V' );
define( 'NONCE_KEY',        '[k:UxuT0ydtAL.012h;IX67V{Q~W^6)u9jl$5AmBlnJ3e&?~~^xU3ySxdv,RN1~F' );
define( 'AUTH_SALT',        '5@@p:&,S@ATO^mEg#M:R6l@V{0SL9f(3W g4]H7Ayt+X(:#obAJVp*:)gVO]mZy;' );
define( 'SECURE_AUTH_SALT', ',O~3F)W#{&+}?s;KZ:i%065t%wi|m>(u8C+=fK~fqhE/f.d3?J<4gxyjd,DZgl.!' );
define( 'LOGGED_IN_SALT',   'VS*?pS t,n ,)8*eSK<)Una}78dB)G>a=#L dvLyC5L><;qa3w.uvl*-pBBg&8Gn' );
define( 'NONCE_SALT',       'i&GyV(FkyjOaj.k]N.f6C&D14m^G$A]vcUCv-#{BWs1;*dGmDj[;IG=b~]D`+[[w' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

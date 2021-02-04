const path = require('path');

const alias = {
  // widget
  // '@widgetFormValidate'   : path.join(__dirname, './src/components/Widget/FormValidate'),
  // '@widgetFormGenerate'   : path.join(__dirname, './src/components/Widget/FormGenerate'),
  // '@widgetLoader'         : path.join(__dirname, './src/components/Widget/Loader'),
  // '@widgetPermission'     : path.join(__dirname, './src/components/Widget/Permission'),

  // resource
  '@img'            : path.join(__dirname, './resource/img'         ),
  '@font'           : path.join(__dirname, './resource/font'        ),
  '@style'          : path.join(__dirname, './resource/style'       ),
  '@lang'           : path.join(__dirname, './resource/lang'        ),
  '@public'         : path.join(__dirname, './public'               ),

  // system
  '@entity'         : path.join(__dirname, './src/core/entity'      ),
  '@enum'           : path.join(__dirname, './src/core/enum'        ),
  '@filter'         : path.join(__dirname, './src/core/filter'      ),
  '@layouts'        : path.join(__dirname, './src/core/layouts'     ),
  '@library'        : path.join(__dirname, './src/core/library'     ),
  '@middleware'     : path.join(__dirname, './src/core/middleware'  ),
  '@permission'     : path.join(__dirname, './src/core/permission'  ),
  '@plugins'        : path.join(__dirname, './src/core/plugins'     ),
  '@router'         : path.join(__dirname, './src/core/router'      ),
  '@services'       : path.join(__dirname, './src/core/services'    ),
  '@store'          : path.join(__dirname, './src/core/store'       ),

  // base
  '@pages'          : path.join(__dirname, './src/page'             ),
  '@components'     : path.join(__dirname, './src/component'        ),
  '@'               : path.join(__dirname, './src'                  ),

  // test
  // '@fixtures'       : path.join(__dirname, './test/fixtures'        ),
};

module.exports = alias;

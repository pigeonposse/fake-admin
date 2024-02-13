/**
 * PluginInfo..
 *
 * @description Todo.
 *
 * @see /templates/pluginInfo.js
 */

import { writeSync }    from './writeFile.js'
import { composer }     from './getPkg.js'
import { pluginInfo }   from './templates/pluginInfo.js'
import { pluginReadme } from './templates/pluginReadme.js'

writeSync( composer.data.extra.pluginReadMe, pluginReadme )
writeSync( composer.data.extra.pluginFile, pluginInfo )


## options

| Option                | Type                           | Description                                                                                                                     |
| --------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `center`              | `{ lat: number, lng: number }` | Sets the initial geographical center of the map.                                                                                |
| `zoom`                | `number`                       | Sets the initial zoom level. Valid values typically range from `0` (whole world) to `21+` (individual buildings).               |
| `zoomControl`         | `boolean`                      | Toggles the visibility of zoom control buttons (`+` and `-`) on the map.                                                        |
| `zoomControlOptions`  | `object`                       | Customize the position and style of zoom controls.                                                                              |
| `maxZoom`             | `number`                       | Defines the maximum zoom level users can zoom in to.                                                                            |
| `minZoom`             | `number`                       | Defines the minimum zoom level users can zoom out to.                                                                           |
| `scaleControl`        | `boolean`                      | Displays a scale bar showing distance ratios (e.g., km/mi) on the map.                                                          |
| `scaleControlOptions` | `object`                       | _(To be implemented)_ Customize the appearance and position of the scale bar.                                                   |
| `mapTypeId`           | `string`                       | Sets the type of map to display. Options include `'roadmap'`, `'satellite'`, `'hybrid'`, and `'terrain'`. Example: `'roadmap'`. |

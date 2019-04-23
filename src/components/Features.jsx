"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const PreviewCompatibleImage_1 = __importDefault(require("./PreviewCompatibleImage"));
const FeatureGrid = ({ gridItems }) => (<div className="columns is-multiline">
    {gridItems.map(item => (<div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div style={{
    width: '240px',
    display: 'inline-block',
}}>
              <PreviewCompatibleImage_1.default imageInfo={item}/>
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>))}
  </div>);
FeatureGrid.propTypes = {
    gridItems: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        image: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.string]),
        text: prop_types_1.default.string,
    })),
};
exports.default = FeatureGrid;
//# sourceMappingURL=Features.jsx.map
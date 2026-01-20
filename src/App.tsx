const setupGroups = [
  {
    title: "1.1 Thiết lập tổ chức & pháp lý",
    items: [
      "Thông tin tổ chức đại diện vùng trồng: tên, MST, địa chỉ, đại diện, liên hệ",
      "Vai trò: đứng hồ sơ PUC, quản lý nội bộ, đầu mối cơ quan quản lý",
      "Hồ sơ HTX/nhóm hộ: quyết định thành lập, danh sách thành viên, biên bản tham gia, ủy quyền",
      "Danh sách hộ dân (farmer master): CCCD, số điện thoại, địa chỉ thường trú & vườn",
      "Quan hệ với tổ chức: thành viên, liên kết, thuê khoán, đồng sở hữu",
      "Tài liệu: phiếu kê khai chủ vườn, cam kết tham gia"
    ]
  },
  {
    title: "1.2 Vùng trồng & phân lô (PUC core)",
    items: [
      "Mã vùng nội bộ và mã PUC chính thức sau khi cấp",
      "Ranh giới polygon/toạ độ, bản đồ nền, diện tích, giống, tuổi cây, hệ thống tưới",
      "Phân lô kỹ thuật: Plot ID, diện tích, toạ độ trung tâm/đa giác ranh",
      "Chủ lô, số cây, năm trồng, tình trạng canh tác",
      "Mục đích: nhật ký, giám sát sâu bệnh, lấy mẫu dư lượng, khóa lô khi rủi ro",
      "Chuẩn ISPM6/sâu bệnh: danh mục đối tượng, lịch giám sát, điểm bẫy, người phụ trách"
    ]
  },
  {
    title: "1.3 Danh mục canh tác",
    items: [
      "Giai đoạn sinh trưởng: ra đọt, ra hoa, đậu trái, nuôi trái, trước/sau thu hoạch",
      "Danh mục công việc: tưới, bón, tỉa, vệ sinh, xử lý ra hoa, bao trái, phun thuốc",
      "Danh mục vật tư: thương mại, hoạt chất, nhóm thuốc, liều, PHI, nhà cung cấp",
      "Quy định cảnh báo: bắt buộc ghi lô, ảnh nhãn, chữ ký người phụ trách",
      "Danh mục nhà cung cấp & lô vật tư để truy vết"
    ]
  },
  {
    title: "1.4 Chuỗi sau thu hoạch",
    items: [
      "Điểm tập kết & QC: checklist độ già, sâu bệnh, tạp chất, nhiệt độ, phân hạng",
      "Danh mục thương lái/đội cắt, lái xe, biển số",
      "Danh mục nhà máy/cơ sở đóng gói, kho lạnh, dây chuyền, mã PHC",
      "Sản phẩm & định mức: trái tươi, cơm đông lạnh, sấy thăng hoa",
      "Cấu trúc mã lô: batch nông hộ → lot nhà máy → thành phẩm"
    ]
  }
];

const roleGroups = [
  {
    title: "Chủ vườn",
    focus: "Nhập hoặc xác nhận",
    items: [
      "Xác nhận thông tin chủ vườn (1 lần)",
      "Nhật ký việc đơn giản: tưới, bón, tỉa, bao trái",
      "Xác nhận ngày phun/bón khi kỹ thuật nhập thay"
    ]
  },
  {
    title: "Kỹ thuật vùng trồng (NVKT)",
    focus: "Nhập chính",
    items: [
      "Phân lô, tọa độ, số cây, tình trạng vườn",
      "Nhật ký thuốc BVTV: hoạt chất, liều, PHI, ảnh nhãn/hiện trường",
      "Sổ sâu bệnh, ISPM6, kết quả giám sát, biện pháp xử lý",
      "Khóa thu hoạch theo PHI"
    ]
  },
  {
    title: "Admin hồ sơ PUC",
    focus: "Nhập/đẩy hồ sơ",
    items: [
      "Tờ khai kỹ thuật, danh sách hộ, bản đồ, kế hoạch giám sát dư lượng",
      "Theo dõi trạng thái: nộp → bổ sung → thẩm định → cấp mã"
    ]
  },
  {
    title: "QC/Thu mua điểm tập kết",
    focus: "Nhập tại thời điểm hàng về",
    items: [
      "Lệnh thu mua, cân xe/cân lô, phân hạng",
      "Tạo batch thu hoạch chính thức gắn PUC/plot",
      "Biên bản giao nhận, chữ ký hộ/đội cắt"
    ]
  },
  {
    title: "Điều phối nhà máy",
    focus: "Nhập khi nhập kho và tách luồng",
    items: [
      "Phiếu nhập nhà máy, nhiệt độ, tình trạng",
      "Split luồng: đóng gói tươi vs chế biến",
      "Khóa liên kết batch → lot nhà máy"
    ]
  },
  {
    title: "QC nhà máy",
    focus: "Nhập theo CCP",
    items: [
      "QC cổng, QC dây chuyền, kim loại, vệ sinh",
      "Gắn kết quả test theo lot/batch"
    ]
  },
  {
    title: "Tổ sản xuất chế biến",
    focus: "Nhập theo mẻ",
    items: [
      "Mã mẻ, nguyên liệu vào/đầu ra/hao hụt",
      "Thông số: thời gian, nhiệt độ, thiết bị",
      "Thành phẩm FG lot, quy cách, nhập kho"
    ]
  },
  {
    title: "Xuất khẩu/Kinh doanh",
    focus: "Nhập theo lô xuất",
    items: [
      "Packing list, container, thị trường, số lượng",
      "Liên kết chứng từ PUC/PHC, phytosanitary, CO/CI",
      "Truy xuất QR cho khách"
    ]
  }
];

const stages = [
  {
    label: "Giai đoạn A",
    title: "Làm mã vùng trồng",
    steps: [
      {
        code: "A1",
        title: "Khởi tạo vùng trồng",
        owner: "Admin hồ sơ + NVKT",
        input: "Tổ chức, danh sách hộ, phân lô sơ bộ, bản đồ",
        evidence: "Phiếu kê khai chủ vườn, danh sách hộ, biên bản ủy quyền"
      },
      {
        code: "A2",
        title: "Khảo sát & chuẩn hóa plot",
        owner: "NVKT",
        input: "Tọa độ plot, diện tích, giống, tuổi cây, hạ tầng",
        evidence: "Ảnh vườn, ảnh mốc, file tọa độ"
      },
      {
        code: "A3",
        title: "Thiết lập giám sát & tập huấn",
        owner: "NVKT + Admin",
        input: "Kế hoạch giám sát dư lượng, lịch ISPM6, danh sách tập huấn",
        evidence: "Danh sách đào tạo, kế hoạch giám sát"
      },
      {
        code: "A4",
        title: "Lập hồ sơ đề nghị",
        owner: "Admin hồ sơ",
        input: "Bộ form hồ sơ, bản đồ, danh sách hộ, tờ khai kỹ thuật",
        evidence: "Trạng thái: Draft → Submit → Need update → Approved"
      }
    ]
  },
  {
    label: "Giai đoạn B",
    title: "Canh tác duy trì",
    steps: [
      {
        code: "B1",
        title: "Ghi nhật ký định kỳ",
        owner: "NVKT (chính) + hộ xác nhận",
        input: "Công việc theo ngày, vật tư, hoạt chất, PHI, ảnh nhãn",
        evidence: "Điểm khóa: PHI quyết định ngày thu hoạch"
      },
      {
        code: "B2",
        title: "Sổ sâu bệnh & ISPM6",
        owner: "NVKT",
        input: "Phát hiện, mức độ, giải pháp, kết quả, điểm giám sát",
        evidence: "Ảnh bẫy/hiện trường, biên bản kiểm tra"
      },
      {
        code: "B3",
        title: "Kiểm tra nội bộ trước thu hoạch",
        owner: "NVKT + Quản lý vùng",
        input: "Đánh giá tuân thủ, rủi ro, quyết định mở/khóa",
        evidence: "Danh sách plot đủ điều kiện"
      }
    ]
  },
  {
    label: "Giai đoạn C",
    title: "Trước thu hoạch",
    steps: [
      {
        code: "C1",
        title: "Kế hoạch thu hoạch theo plot",
        owner: "NVKT + Thu mua",
        input: "Ngày dự kiến, sản lượng, đội cắt, điểm tập kết, giá",
        evidence: "Ràng buộc: chỉ lập nếu plot qua PHI"
      },
      {
        code: "C2",
        title: "Tạo mã đợt thu hoạch",
        owner: "Thu mua/NVKT",
        input: "Vùng, plot tham gia, ước tính tấn, khung giờ cắt",
        evidence: "Harvest Event"
      }
    ]
  },
  {
    label: "Giai đoạn D",
    title: "Thu hoạch & thu mua",
    steps: [
      {
        code: "D1",
        title: "Thu hoạch tại vườn",
        owner: "Đội cắt + NVKT",
        input: "Thời gian cắt, plot, ước lượng, hình ảnh",
        evidence: "Biên bản nếu yêu cầu"
      },
      {
        code: "D2",
        title: "Cân tại điểm tập kết",
        owner: "Thu mua + QC",
        input: "Batch ID, plot nguồn, hộ/đội cắt, gross/tare/net",
        evidence: "Phiếu cân, biên bản giao nhận, chữ ký"
      },
      {
        code: "D3",
        title: "Thanh toán & đối soát",
        owner: "Thu mua/Kế toán",
        input: "Giá mua, phụ phí/bonus, phương thức, trạng thái",
        evidence: "Gắn thanh toán theo batch"
      }
    ]
  },
  {
    label: "Giai đoạn E",
    title: "Vào nhà máy & tách luồng",
    steps: [
      {
        code: "E1",
        title: "Nhập cổng nhà máy",
        owner: "Receiving + QC",
        input: "Intake ticket, nhiệt độ, tình trạng, xác nhận batch",
        evidence: "Bắt buộc batch không bị hold"
      },
      {
        code: "E2",
        title: "Split luồng",
        owner: "Production planner",
        input: "Fresh export kg, Process kg",
        evidence: "Tổng split = received (trừ hao hụt định nghĩa)"
      }
    ]
  },
  {
    label: "Giai đoạn F",
    title: "Luồng trái tươi xuất khẩu",
    steps: [
      {
        code: "F1",
        title: "Đóng gói",
        owner: "Packing supervisor + QC",
        input: "Số thùng, kg/thùng, grade, mã đóng gói",
        evidence: "QC ngoại quan/cỡ/tỷ lệ lỗi"
      },
      {
        code: "F2",
        title: "Tạo lô xuất",
        owner: "Export/Sales docs",
        input: "Container, market, packing list, net kg",
        evidence: "Liên kết về batch + packing run"
      }
    ]
  },
  {
    label: "Giai đoạn G",
    title: "Luồng chế biến",
    steps: [
      {
        code: "G1",
        title: "Tách cơm (pulping run)",
        owner: "Tổ sản xuất + QC",
        input: "Input kg, output pulp kg, waste kg",
        evidence: "Pulp → đông lạnh & sấy thăng hoa"
      },
      {
        code: "G2",
        title: "Đông lạnh",
        owner: "Tổ cấp đông + kho",
        input: "FG lot, quy cách đóng gói, số lượng",
        evidence: "Nhập kho -18°C"
      },
      {
        code: "G3",
        title: "Sấy thăng hoa",
        owner: "Tổ FD + QC",
        input: "Input pulp kg, thông số mẻ, output FD",
        evidence: "Bắt buộc nhập yield & lý do lệch"
      }
    ]
  }
];

const lockPoints = [
  {
    title: "Khóa batch theo PHI",
    detail:
      "Không cho tạo batch thu hoạch nếu plot chưa qua PHI hoặc thiếu dữ liệu hoạt chất/PHI."
  },
  {
    title: "Batch phải phát sinh tại cân",
    detail:
      "Batch tạo tại điểm tập kết, không sửa nguồn plot sau khi nhập nhà máy (chỉ append evidence)."
  },
  {
    title: "Split nhà máy = điểm truy xuất",
    detail: "Mọi kg tách luồng phải audit được, tổng split phải khớp received."
  },
  {
    title: "Mẻ chế biến & thành phẩm link batch",
    detail:
      "Không nhập nguồn chung chung; FG lot phải truy ngược về batch/plot và PUC."
  }
];

const highlightMetrics = [
  {
    label: "PUC + Plot",
    value: "1 nguồn chuẩn hóa",
    note: "Đóng khung dữ liệu nền cho toàn bộ nhật ký"
  },
  {
    label: "Batch harvest",
    value: "Tại cân",
    note: "Điểm sinh mã truy xuất quan trọng nhất"
  },
  {
    label: "Split nhà máy",
    value: "Audit 100%",
    note: "Khóa liên kết batch → lot → FG"
  },
  {
    label: "Shipment",
    value: "Trace-back",
    note: "QR truy xuất ngược đến PUC/plot"
  }
];

const stageColors = [
  "bg-emerald-50 border-emerald-200",
  "bg-sky-50 border-sky-200",
  "bg-indigo-50 border-indigo-200",
  "bg-amber-50 border-amber-200",
  "bg-rose-50 border-rose-200",
  "bg-lime-50 border-lime-200",
  "bg-violet-50 border-violet-200"
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10">
        <header className="rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-indigo-500 p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            PUC Traceability
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            Thiết kế giao diện quy trình vùng trồng → thu hoạch → nhà máy → xuất khẩu
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/90 md:text-base">
            Tổng quan dữ liệu cần thiết lập, vai trò nhập liệu, và luồng nghiệp vụ từ PUC
            đến chế biến/đóng gói. Giao diện ưu tiên hiển thị các điểm khóa truy xuất để
            đảm bảo tuân thủ và minh bạch khi thanh tra.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {highlightMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-xs text-white/70">{metric.label}</p>
                <p className="mt-2 text-xl font-semibold">{metric.value}</p>
                <p className="mt-1 text-xs text-white/70">{metric.note}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              1) Thiết lập dữ liệu nền
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Các danh mục bắt buộc để hệ thống chạy đúng quy trình và sẵn sàng làm hồ sơ
              PUC.
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {setupGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-slate-200 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              2) Vai trò nhập liệu thực tế
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Ai nhập gì để dữ liệu đúng, đủ và có người chịu trách nhiệm xác nhận.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {roleGroups.map((role) => (
                <div key={role.title} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">{role.title}</h3>
                    <span className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-semibold text-brand-700">
                      {role.focus}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {role.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                3) Quy trình nhập liệu theo giai đoạn
              </h2>
              <p className="text-sm text-slate-500">
                Dạng “Bước – ai làm – nhập gì – chứng từ”. Mỗi giai đoạn là một lane để
                theo dõi tiến độ.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1">PUC core</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Harvest batch</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Factory split</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Export & Processing</span>
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {stages.map((stage, index) => (
              <div
                key={stage.label}
                className={`rounded-2xl border p-4 ${stageColors[index % stageColors.length]}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      {stage.label}
                    </p>
                    <h3 className="text-base font-semibold text-slate-900">{stage.title}</h3>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    {stage.steps.length} bước
                  </span>
                </div>
                <div className="mt-4 space-y-4">
                  {stage.steps.map((step) => (
                    <div key={step.code} className="rounded-xl bg-white/70 p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold text-brand-600">{step.code}</p>
                          <h4 className="text-sm font-semibold text-slate-900">{step.title}</h4>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                          {step.owner}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-slate-600">
                        <p>
                          <span className="font-semibold text-slate-700">Nhập:</span> {step.input}
                        </p>
                        <p className="mt-1">
                          <span className="font-semibold text-slate-700">Minh chứng:</span> {step.evidence}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-brand-200 bg-brand-50 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-brand-900">
                4) Các điểm khóa bắt buộc (compliance gates)
              </h2>
              <p className="text-sm text-brand-800">
                Nếu thiếu một trong các điểm này, quy trình sẽ không đạt yêu cầu thanh tra.
              </p>
            </div>
            <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">
              Mandatory Controls
            </span>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {lockPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{point.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl bg-slate-900 p-6 text-slate-200">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Traceability UX</p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Mọi dữ liệu đều truy xuất ngược về PUC/plot
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Gợi ý triển khai: ưu tiên mobile cho NVKT tại vườn, tablet cho QC điểm cân,
                và dashboard tổng hợp cho admin hồ sơ.
              </p>
            </div>
            <div className="grid gap-2 text-xs text-slate-400">
              <div className="rounded-full border border-slate-700 px-3 py-1">Nhật ký canh tác</div>
              <div className="rounded-full border border-slate-700 px-3 py-1">Batch & split</div>
              <div className="rounded-full border border-slate-700 px-3 py-1">FG lot & shipment</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

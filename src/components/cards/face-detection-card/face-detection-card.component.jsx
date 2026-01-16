import "./face-detection-card.styles.css";
import { useFaceDetectionStore } from "../../../store";

import SubmitBtn from "../../button/submit-btn/submit-btn.component";
import FaceDetectionInput from "../../form-input/face-detection-input.component";
import TipsCardComponent from "../tips-card/tips-card.component";
import FaceResultCard from "../face-results-card/face-result-card.component";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

const dummyData = [
  {
    id: "9dfcde14aa464ebe8f14c6d251644810",
    status: {
      stack_trace: [],
      code: 10000,
      description: "Ok",
      details: "",
      percent_completed: 0,
      time_remaining: 0,
      req_id: "",
      internal_details: "",
      redirect_info: null,
      developer_notes: "",
    },
    created_at: {
      seconds: "1768569680",
      nanos: 555518830,
    },
    model: {
      toolkits: [],
      use_cases: [],
      languages: [],
      languages_full: [],
      check_consents: [],
      id: "face-detection",
      name: "Face",
      created_at: {
        seconds: "1606323024",
        nanos: 453038000,
      },
      app_id: "main",
      output_info: null,
      model_version: {
        method_signatures: [],
        special_handling: [],
        id: "45fb9a671625463fa646c3523a3087d5",
        created_at: {
          seconds: "1614879626",
          nanos: 81729000,
        },
        status: {
          stack_trace: [],
          code: 21100,
          description:
            "Build job failed. model-migrate-45fb9a671625463fa646c3523a3087d5",
          details: "",
          percent_completed: 0,
          time_remaining: 0,
          req_id: "",
          internal_details: "",
          redirect_info: null,
          developer_notes: "",
        },
        active_concept_count: 0,
        metrics: null,
        total_input_count: 0,
        pretrained_model_config: null,
        completed_at: {
          seconds: "1765524678",
          nanos: 26442000,
        },
        description: "",
        visibility: {
          gettable: 50,
        },
        app_id: "main",
        user_id: "clarifai",
        modified_at: null,
        metadata: {
          fields: {},
        },
        license: "",
        output_info: null,
        input_info: null,
        train_info: null,
        import_info: null,
        train_log: "",
        inference_compute_info: {
          accelerator_type: ["NVIDIA-*"],
          accelerator_topology: [],
          cpu_memory: "4Gi",
          num_accelerators: 1,
          accelerator_memory: "1299Mi",
          cpu_limit: "1",
          cpu_requests: "",
          cpu_memory_requests: "",
        },
        build_info: {
          docker_image_name: "",
          docker_image_tag: "",
          docker_image_digest: "",
          platform: "linux/amd64",
        },
      },
      display_name: "",
      user_id: "clarifai",
      model_type_id: "visual-detector",
      visibility: {
        gettable: 50,
      },
      description: "",
      metadata: null,
      notes: "",
      modified_at: {
        seconds: "1768374132",
        nanos: 170189000,
      },
      is_starred: false,
      star_count: 0,
      task: "",
      presets: null,
      workflow_recommended: {
        value: false,
      },
      default_eval_info: null,
      bookmark_origin: null,
      image: {
        hosted_image_info: {},
        url: "https://data.clarifai.com/large/users/clarifai/apps/main/input_owners/luv_2261/inputs/image/35c370253c0138cfd8e0ad6afe0f67d9",
        base64: {
          type: "Buffer",
          data: [],
        },
        allow_duplicate_url: false,
        hosted: {
          sizes: ["small", "large"],
          prefix: "https://data.clarifai.com",
          suffix:
            "users/clarifai/apps/main/input_owners/luv_2261/inputs/image/35c370253c0138cfd8e0ad6afe0f67d9",
          crossorigin: "use-credentials",
        },
        image_info: null,
        decoded_bytes: {
          type: "Buffer",
          data: [],
        },
      },
      license_type: 0,
      source: 0,
      creator: "",
      version_count: 0,
      billing_type: 2,
      featured_order: null,
      deploy_restriction: 0,
      replica_count: 0,
      open_router_info: null,
    },
    input: {
      dataset_ids: [],
      id: "9ad97d3943544a459acbe8787edf3092",
      data: {
        concepts: [],
        colors: [],
        clusters: [],
        embeddings: [],
        regions: [],
        frames: [],
        tracks: [],
        time_segments: [],
        hits: [],
        heatmaps: [],
        parts: [],
        image: {
          hosted_image_info: {},
          url: "https://images.unsplash.com/photo-1767600467988-855bf61273ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          base64: {
            type: "Buffer",
            data: [116, 114, 117, 101],
          },
          allow_duplicate_url: false,
          hosted: null,
          image_info: null,
          decoded_bytes: {
            type: "Buffer",
            data: [],
          },
        },
        video: null,
        metadata: null,
        geo: null,
        text: null,
        audio: null,
        ndarray: null,
        int_value: "0",
        float_value: 0,
        bytes_value: {
          type: "Buffer",
          data: [],
        },
        bool_value: false,
        string_value: "",
        struct_value: null,
      },
      created_at: null,
      modified_at: null,
      status: null,
      settings: null,
    },
    data: {
      concepts: [],
      colors: [],
      clusters: [],
      embeddings: [],
      regions: [
        {
          id: "65f8a9cfb61995720ace3f8c84ec1563",
          region_info: {
            keypoint_locations: [],
            bounding_box: {
              top_row: 0.5932561755180359,
              left_col: 0.555351734161377,
              bottom_row: 0.7867334485054016,
              right_col: 0.8091381788253784,
            },
            mask: null,
            polygon: null,
            point: null,
            span: null,
            token: null,
          },
          data: {
            concepts: [
              {
                id: "ai_b1b1b1b1",
                name: "BINARY_POSITIVE",
                value: 0.9991463422775269,
                created_at: null,
                language: "",
                app_id: "main",
                definition: "",
                vocab_id: "",
                visibility: null,
                user_id: "clarifai",
                keypoint_info: null,
                extra_info: null,
                metadata: null,
                image: null,
              },
            ],
            colors: [],
            clusters: [],
            embeddings: [],
            regions: [],
            frames: [],
            tracks: [],
            time_segments: [],
            hits: [],
            heatmaps: [],
            parts: [],
            image: null,
            video: null,
            metadata: null,
            geo: null,
            text: null,
            audio: null,
            ndarray: null,
            int_value: "0",
            float_value: 0,
            bytes_value: {
              type: "Buffer",
              data: [],
            },
            bool_value: false,
            string_value: "",
            struct_value: null,
          },
          value: 0.9991463422775269,
          track_id: "",
        },
        {
          id: "ee293486356958b75bd8bad55384fb71",
          region_info: {
            keypoint_locations: [],
            bounding_box: {
              top_row: 0.22968052327632904,
              left_col: 0.5606401562690735,
              bottom_row: 0.48087960481643677,
              right_col: 0.8445889353752136,
            },
            mask: null,
            polygon: null,
            point: null,
            span: null,
            token: null,
          },
          data: {
            concepts: [
              {
                id: "ai_b1b1b1b1",
                name: "BINARY_POSITIVE",
                value: 0.9990230798721313,
                created_at: null,
                language: "",
                app_id: "main",
                definition: "",
                vocab_id: "",
                visibility: null,
                user_id: "clarifai",
                keypoint_info: null,
                extra_info: null,
                metadata: null,
                image: null,
              },
            ],
            colors: [],
            clusters: [],
            embeddings: [],
            regions: [],
            frames: [],
            tracks: [],
            time_segments: [],
            hits: [],
            heatmaps: [],
            parts: [],
            image: null,
            video: null,
            metadata: null,
            geo: null,
            text: null,
            audio: null,
            ndarray: null,
            int_value: "0",
            float_value: 0,
            bytes_value: {
              type: "Buffer",
              data: [],
            },
            bool_value: false,
            string_value: "",
            struct_value: null,
          },
          value: 0.9990230798721313,
          track_id: "",
        },
        {
          id: "2c249cea4ed1952c7cd87e79182ab01b",
          region_info: {
            keypoint_locations: [],
            bounding_box: {
              top_row: 0.1252775639295578,
              left_col: 0.0058083198964595795,
              bottom_row: 0.42698103189468384,
              right_col: 0.28523367643356323,
            },
            mask: null,
            polygon: null,
            point: null,
            span: null,
            token: null,
          },
          data: {
            concepts: [
              {
                id: "ai_b1b1b1b1",
                name: "BINARY_POSITIVE",
                value: 0.9945358037948608,
                created_at: null,
                language: "",
                app_id: "main",
                definition: "",
                vocab_id: "",
                visibility: null,
                user_id: "clarifai",
                keypoint_info: null,
                extra_info: null,
                metadata: null,
                image: null,
              },
            ],
            colors: [],
            clusters: [],
            embeddings: [],
            regions: [],
            frames: [],
            tracks: [],
            time_segments: [],
            hits: [],
            heatmaps: [],
            parts: [],
            image: null,
            video: null,
            metadata: null,
            geo: null,
            text: null,
            audio: null,
            ndarray: null,
            int_value: "0",
            float_value: 0,
            bytes_value: {
              type: "Buffer",
              data: [],
            },
            bool_value: false,
            string_value: "",
            struct_value: null,
          },
          value: 0.9945358037948608,
          track_id: "",
        },
        {
          id: "f3f9f8b2dd2d3ce657392fe42c3b0a93",
          region_info: {
            keypoint_locations: [],
            bounding_box: {
              top_row: 0.2253568023443222,
              left_col: 0.30656012892723083,
              bottom_row: 0.41898253560066223,
              right_col: 0.5567960143089294,
            },
            mask: null,
            polygon: null,
            point: null,
            span: null,
            token: null,
          },
          data: {
            concepts: [
              {
                id: "ai_b1b1b1b1",
                name: "BINARY_POSITIVE",
                value: 0.987511157989502,
                created_at: null,
                language: "",
                app_id: "main",
                definition: "",
                vocab_id: "",
                visibility: null,
                user_id: "clarifai",
                keypoint_info: null,
                extra_info: null,
                metadata: null,
                image: null,
              },
            ],
            colors: [],
            clusters: [],
            embeddings: [],
            regions: [],
            frames: [],
            tracks: [],
            time_segments: [],
            hits: [],
            heatmaps: [],
            parts: [],
            image: null,
            video: null,
            metadata: null,
            geo: null,
            text: null,
            audio: null,
            ndarray: null,
            int_value: "0",
            float_value: 0,
            bytes_value: {
              type: "Buffer",
              data: [],
            },
            bool_value: false,
            string_value: "",
            struct_value: null,
          },
          value: 0.987511157989502,
          track_id: "",
        },
      ],
      frames: [],
      tracks: [],
      time_segments: [],
      hits: [],
      heatmaps: [],
      parts: [],
      image: null,
      video: null,
      metadata: null,
      geo: null,
      text: null,
      audio: null,
      ndarray: null,
      int_value: "0",
      float_value: 0,
      bytes_value: {
        type: "Buffer",
        data: [],
      },
      bool_value: false,
      string_value: "",
      struct_value: null,
    },
    prompt_tokens: 0,
    completion_tokens: 0,
  },
];

const tipsData = {
  title: "Tips for best results:",
  tips: [
    {
      uid: 1,
      tips: "Use high-quality images",
    },
    {
      uid: 2,
      tips: "Ensure faces are clearly visible",
    },
    {
      uid: 3,
      tips: "Good lighting improves accuracy",
    },
    {
      uid: 4,
      tips: "Use vertical orientation to avoid image being stretched",
    },
  ],
};

const FaceDetectionCard = () => {
  const inputURL = useFaceDetectionStore((state) => state.inputURL);
  const setFaceResult = useFaceDetectionStore((state) => state.setFaceResult);
  const clearResult = useFaceDetectionStore((state) => state.clearResult);
  const faceResult = useFaceDetectionStore((state) => state.faceResult);
  const setIsLoading = useFaceDetectionStore((state) => state.setIsLoading);
  const setIsAlert = useFaceDetectionStore((state) => state.setIsAlert);
  const setIsAlertText = useFaceDetectionStore((state) => state.setIsAlertText);

  const handleSubmit = () => {
    if (inputURL) {
      // setFaceResult(dummyData[0].data.regions);
      // return;

      setIsLoading(true);
      fetch("http://localhost:3000/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: inputURL,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setFaceResult(data.outputs[0].data.regions);
        })
        .catch((err) => console.error(err));
    } else {
      setIsAlert(true);
      setIsAlertText(
        "Paste an image URL or choose an example image to get started."
      );
    }
  };

  const handleReset = () => {
    clearResult();
  };

  return (
    <div className="face-detection-card">
      <div className="flex flex-col shadow-md p-4 rounded-md overflow-hidden">
        <div className="grow">
          <h1 className="flex items-center gap-2">
            <ImageOutlinedIcon />
            Image Input
          </h1>
          <div className="py-4">
            <FaceDetectionInput />
          </div>

          <div className="pb-4">
            <TipsCardComponent data={tipsData} />
          </div>
        </div>

        {faceResult ? (
          <>
            <SubmitBtn
              text={"Try Another Image"}
              onClick={handleReset}
              icon={<ReplayOutlinedIcon />}
            />
          </>
        ) : (
          <>
            <SubmitBtn
              text={"Detect Faces"}
              onClick={handleSubmit}
              icon={<FullscreenOutlinedIcon />}
            />
          </>
        )}
      </div>
      <FaceResultCard />
    </div>
  );
};

export default FaceDetectionCard;
